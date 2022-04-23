import React from 'react'
import styled from 'styled-components'
//components:
import Dates from './dates/Dates';
import Pagination from './pagination/Pagination';


export default function Header() {

  return (
    <Container>
      <div></div>
      <div className='date-pag-container' >
        <Pagination />
        <Dates />
      </div>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid black;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .date-pag-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;