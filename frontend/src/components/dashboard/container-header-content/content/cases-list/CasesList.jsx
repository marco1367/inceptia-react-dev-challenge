import React from 'react'
import styled from 'styled-components'
//components:
//react-icons:
import { AiOutlineCalendar, AiOutlineReload } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";




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
                    <div className='title doble' >
                      <AiOutlineCalendar style={{ fontSize: '25px', marginRight: '10px' }} />
                      <p className='doble color-red' > {caso.last_updated} </p>
                    </div>
                    <div className='title' > <p> {caso.case_uuid} </p> </div>
                    <div className='title doble' > <p> {caso.phone} </p> </div>
                    <div className='title' > <p className='color-red' > {caso.extra_metadata.dni} </p> </div>
                    <div className='title' > <p className='color-red' > {caso.extra_metadata.grupo} </p> </div>
                    <div className='title' > <p className='color-red' > {caso.extra_metadata.orden} </p> </div>
                    <div className='title' >
                      <CgSandClock style={{ fontSize: '25px', marginRight: '10px' }} />
                      <p className='color-red' > {caso.case_duration} </p>
                    </div>
                    <div className='title doble' > <p> {caso.case_result.name} </p> </div>
                  </div>
                )
              })
              :
              <div className='no-date-match' >
                <p>No hay casos registrados para ese rango de fechas</p>
              </div>
          )
          :
          <div className='loading-container' >
            <AiOutlineReload
              style={{
                fontSize: '60px'
              }}
              className='loading-icon'
            />
          </div>
      }
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  .titles{
    width: 100%;
    height: auto;
    background-color: white;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    .title{
      width: calc(100% / 11);
      height: 32px;
      padding: 2.5px;
      border: 1px solid #ededed;
      
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .doble{
      width: calc((100% / 11)*2);
    }
    .color-red{
      color: #FE4747;
      width: 100%
    }
  }

  .no-date-match{
    width: 100%;
    height: calc(100% - 80px);

    display: flex;
    justify-content: center;
    align-items: center;

    p{
      font-size: 20px;
      color: #999;
      font-weight: inherit;
      line-height: 1.45;
    }
  }

  .loading-container{
    width: 100%;
    height: calc(100% - 80px);
    background-color: white ;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .loading-icon{
    animation-name: girar;
    animation-duration: 2s;
  }
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
