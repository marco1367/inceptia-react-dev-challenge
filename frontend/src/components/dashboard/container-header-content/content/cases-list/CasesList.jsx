import React from 'react'
import styled from 'styled-components'
//components:

export default function CasesList({ List }) {


  return (
    <Container>
      <div className='titles' id='header' >
        <div className='title doble' > <p>Gestionado</p> </div>
        <div className='title' > <p>ID Caso</p> </div>
        <div className='title doble' > <p>Teléfono</p> </div>
        <div className='title' > <p>Dni</p> </div>
        <div className='title' > <p>Grupo</p> </div>
        <div className='title' > <p>Orden</p> </div>
        <div className='title' > <p>Llamada</p> </div>
        <div className='title doble' > <p>Estado</p> </div>
      </div>

      {
        List.list ?
        (
          List.list.results.length > 0 ?
            List.list.results.map((caso) => {
              return (
                <div className='titles' key={caso.case_uuid} >
                  <div className='title doble' > <p> {caso.last_updated} </p> </div>
                  <div className='title' > <p> {caso.case_uuid} </p> </div>
                  <div className='title doble' > <p> {caso.phone} </p> </div>
                  <div className='title' > <p> {caso.extra_metadata.dni} </p> </div>
                  <div className='title' > <p> {caso.extra_metadata.grupo} </p> </div>
                  <div className='title' > <p> {caso.extra_metadata.orden} </p> </div>
                  <div className='title' > <p> {caso.case_duration} </p> </div>
                  <div className='title doble' > <p> {caso.case_result.name} </p> </div>
                </div>
              )
            })
            :
            <p>No hay casos registrados para ese rango de fechas</p>
        )
        :
        <p>Loading...</p>
      }
    </Container>
  )
}


const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
  
  .titles{
    width: 100%;
    height: auto;
    background-color: grey;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    .title{
      width: calc(100% / 11);
      height: 30px;
      padding: 2.5px;
      border: 1px solid black;
      
      display: flex;
      justify-content: start;
      align-items: start;
    }
    .doble{
      width: calc((100% / 11)*2);
    }
  }
  
  #header{
    background-color: #D10101;
    color: white;
    .title{
      border: none;
    }
  }
`;

