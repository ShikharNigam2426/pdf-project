import React from 'react'
import Navbar from './Components/Navbar'
import styled from 'styled-components'

const App = () => {
  return (
    <AppComponent className='bg-dark'>
      <Navbar />
    </AppComponent>
  )
}

const AppComponent = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App