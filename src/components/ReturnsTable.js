import React from 'react'
import YearReturn from './YearReturn'
import Table from 'react-bootstrap/Table'

const ReturnsTable = (props) => {
  return (
    <Table striped className="m-auto w-50">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Return</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => {
          return (
            <YearReturn
              key={row.year}
              year={row.year}
              totalReturn={row.totalReturn}
              cumulativeReturn={row.cumulativeReturn}
            />
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReturnsTable