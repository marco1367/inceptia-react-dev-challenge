import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
//components:
import Sidebar from './sidebar/Sidebar';
import ContainerHedCon from './container-header-content/ContainerHedCon';
import Header from './container-header-content/header/Header';


export default function Dashboard() {

  return (
    <Container>
        <Sidebar />
        <ContainerHedCon>
          <Header />
          <Outlet />
        </ContainerHedCon>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
`;