import React from 'react'

const Stock = (props) => {
  return (
      <tbody>
        <tr>
          <td>{props.year}</td>
          <td>{props.totalReturn}</td>
          <td>{props.cumulativeReturn}</td>
        </tr>
      </tbody>
  )
}

export default Stock