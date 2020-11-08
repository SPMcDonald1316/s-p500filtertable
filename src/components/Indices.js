import React from 'react'
import stockData from '../data'
import Index from './Index'
import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

class Indices extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: []
    }
  }

  componentDidMount() {
    const sortedData = stockData.sort((a, b) => a.year - b.year)
    
    for( let i = 0; i < sortedData.length; i++) {
      if (i === 0) {
        sortedData[i].cumulativeReturn = parseFloat(sortedData[i].totalReturn).toFixed(2)
      } else {
        sortedData[i].cumulativeReturn = (parseFloat(sortedData[i - 1].cumulativeReturn) + parseFloat(sortedData[i].totalReturn)).toFixed(2)
      }
    }

    this.setState({
      index: sortedData
    })
  }

  render() {
    console.log(this.state.index)
    return (
      <div>
  
        <Range
          allowCross={false}
          min={1926}
          max={2019}
        />
  
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Return</th>
              <th>Cumulative Return</th>
            </tr>
          </thead>
        {this.state.index.map((data, key) => {
          return (
                <Index
                  key={data.year}
                  year={data.year}
                  totalReturn={data.totalReturn}
                  cumulativeReturn={data.cumulativeReturn}
                />
                )
        })}
        </table>
      </div>
    )
  }
}

export default Indices