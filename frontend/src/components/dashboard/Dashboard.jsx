import React from 'react'
import styled from 'styled-components'
//components:
import Sidebar from './sidebar/Sidebar';


export default function Dashboard() {
  return (
    <Container>
        <Sidebar></Sidebar>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: yellow;
`;