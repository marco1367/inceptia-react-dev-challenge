import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
//components:
import NavBar from './NavBar';


export default function Layout() {

  return (
    <Container>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: red;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const Content = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: #ededed;
    padding: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

