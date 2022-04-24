import React from 'react'
import styled from 'styled-components'


export default function ContainerHedCon({children}) {

  return (
    <Container>
        {children}
    </Container>
  )
}


const Container = styled.div`
    background-color: white;
    width: calc(100% - 200px);
    height: 100%;
`;