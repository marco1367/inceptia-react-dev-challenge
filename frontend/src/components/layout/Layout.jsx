import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//components:
import NavBar from './NavBar';
import { useEffect } from 'react';
//actions:
import { UserLogIn } from '../../redux/user/userAction';


export default function Layout() {

  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(UserLogIn(JSON.parse(user)))
    }
  }, []);

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
    padding: 10px;
`;

