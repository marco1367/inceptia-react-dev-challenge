import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

export default function PreviewDash() {

  const userStore = useSelector(store => store.user);
  console.log(userStore);//-----

  return (
    <Container>
        <div className='content' >
          <p className='welcome-text' > ¡ {userStore.first_name} {userStore.last_name}, bienvenido a tu dashboard ! </p>
          <p className='secondary-text' >
            Selecciona un cliente y un rango de fechas (opcinal)
          </p>
          <p className='secondary-text' >
            para ver la lista de casos asociados.
          </p>
        </div>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    background-color: #eeeeee;

    display: flex;
    justify-content: center;
    align-items: start;

    .content{
      width: auto;
      height: auto;
      padding: 50px;
      background-color: white;
      margin-top: 100px;
      border-radius: 8px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column
    }

    .welcome-text{
      margin-bottom: 50px;
      text-align: center;
      font-size: 32px;
      color: #666;
      font-weight: inherit;
    }
    .secondary-text{
      font-size: 20px;
      color: #999;
      font-weight: inherit;
      line-height: 1.45;
    }
`;