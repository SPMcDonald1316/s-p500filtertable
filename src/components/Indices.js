import React from 'react'
import stockData from '../data'
import Index from './Index'
import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

class Indices extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: stockData
    }
  }
  render() {
    console.log(this.state.index)
    return (
      <div>
  
        <Range />
  
        {this.state.index.map((data, key) => {
          return (
            <div key={key}>
              <Index
                year={data.year}
                totalReturn={data.totalReturn} 
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Indices