import React from 'react'
import styled from 'styled-components'
//images:
import logo from "./inceptia-logo-grande.png";


export default function Home() {
  return (
    <Container>
        <div className='content' >
            <img src={logo} alt="inceptia-react-challenge-logo" />
            <h1>React Dev Challenge</h1>
        </div>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: #ededed;

    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        background-color: white;
        width: auto;
        height: auto;
        padding: 25px;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1{
            margin-top: 100px;
            font-size: 70px;
            font-weight: 100;
            color: #4ed2ab;
        }
    }
`;