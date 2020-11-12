import React from 'react'
import stockData from '../data'
import ReturnsTable from './ReturnsTable'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import 'react-bootstrap'
import { Container } from 'react-bootstrap'

// Create tooltips for range handles
const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider
const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}

// Sort data once instead of each time component renders?
const sortedData = [...stockData].sort((a, b) => a.year - b.year)


class FilterableReturns extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yearRange: [
        sortedData[0].year,
        sortedData[sortedData.length - 1].year
      ],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(yearRange) {
    this.setState({
      yearRange: yearRange
    })
  }

  render() {
    // Filter data by year change
    const [yearStart, yearEnd] = this.state.yearRange
    const filteredData = sortedData.filter(row => row.year >= yearStart && row.year <= yearEnd)

    // Recalculate cumulative returns
    for (let i = 0; i < filteredData.length; i++) {
      if (i === 0) {
        filteredData[i].cumulativeReturn = filteredData[i].totalReturn
      } else {
        // Convert strings to floats and round to 2 decimals
        filteredData[i].cumulativeReturn = (parseFloat(filteredData[i - 1].cumulativeReturn) + parseFloat(filteredData[i].totalReturn)).toFixed(2)
      }
    }

    // Keep consistent year range
    const fullRange = [
      sortedData[0].year,
      sortedData[sortedData.length - 1].year
    ]

    return (
      <div>

        <Container className="text-center w-75 my-3">
          <label>Filter By Years</label>
          <Range
            allowCross={false}
            min={fullRange[0]}
            max={fullRange[1]}
            defaultValue={fullRange}
            handle={handle}
            onAfterChange={this.handleChange}
            className="form-control-range"
            id="formControlRange"
          />
        </Container>
        
  
        <ReturnsTable data={filteredData}/>
      </div>
    )
  }
}

export default FilterableReturns