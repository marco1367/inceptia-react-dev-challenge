import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export default function ClientBttn({id, name}) {

  return (
    <Container>
      <NavLink 
        to={`${id}`} 
        style={{display: 'inline-block'}}
        className={({ isActive }) => isActive ? "is-active-client" : "bttn-client-list"} 
      > 
        {name} 
      </NavLink>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  heigth: auto;

  .bttn-client-list{
    padding: 10px;
    text-decoration: none;
    color: #696969;
    width: 100%;
  }
  .is-active-client{
    padding: 10px;
    text-decoration: none;
    color: #007fff;
    width: 100%;
    background-color: rgba(0, 34, 145, 0.21);
    border-right: 4px solid #007fff;
  }
`; 