import React from 'react'

const YearReturn = (props) => {
  return (
    <tr key={props.year}>
      <td>{props.year}</td>
      <td>{props.totalReturn}</td>
      <td>{props.cumulativeReturn}</td>
    </tr>
  )
}

export default YearReturn