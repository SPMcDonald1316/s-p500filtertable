import React from 'react'
import NavBar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <NavBar bg="primary" variant="dark">
      <NavBar.Brand>S&P 500</NavBar.Brand>
      <br />
      <NavBar.Text>Total and Cumulative Returns</NavBar.Text>
    </NavBar>
  )
}

export default Header