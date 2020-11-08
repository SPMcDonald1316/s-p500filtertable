import React from 'react'

const Stock = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.year}</td>
          <td>{props.totalReturn}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stock