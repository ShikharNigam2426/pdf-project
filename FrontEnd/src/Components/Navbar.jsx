import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Navbar = () => {
  return (
    <NavbarComponent className='d-flex justify-content-between'>
      <h1>Logo</h1>
      <button className="btn btn-outline-secondary d-flex align-items-center">
        <AddCircleOutlineIcon />  
        <span className="ms-2">Upload</span>
      </button>
    </NavbarComponent>
  )
}

const NavbarComponent = styled.div`
  width: 100%;
  height: 10vh;
  background-color: orange;
`;

export default Navbar;
