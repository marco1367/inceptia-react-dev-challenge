import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export default function ClientBttn({id, name}) {

  return (
    <Container>
      <NavLink to={`${id}`} > {name} </NavLink>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  heigth: auto;
  padding: 10px;
  border: 1px solid black;
`; 