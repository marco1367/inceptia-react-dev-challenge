import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { GetClients } from '../../../redux/clients/clientsAction';
//components:
import ClientBttn from '../client-bttn/ClientBttn';


export default function Sidebar() {

  const dispatch = useDispatch();
  const userStore = useSelector(store => store.user);
  const clientsStore = useSelector(store => store.clients);


  useEffect(() => {
    console.log(userStore);//-----
    dispatch(GetClients(userStore.token));
  }, [userStore]);


  return (
    <Container>
      {
        clientsStore &&
        clientsStore.map((client) => {
          return <ClientBttn key={client.id} id={client.id} name={client.name} />
        })
      }
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: 100%;
  padding: 10px;
  border: 1px solid black;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  .clients-list-container{
    width: 100%;
    height: auto;
    padding: 10px;
    border: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;