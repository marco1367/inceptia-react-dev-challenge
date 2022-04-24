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
      <div className='cliente-title' >
        <p>CLIENTE</p>
      </div>
      <div className='clients-list-container' >
        {
          clientsStore &&
          clientsStore.map((client) => {
            return <ClientBttn key={client.id} id={client.id} name={client.name} />
          })
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: 100%;
  padding: 10px;
  padding-right: 0;
  background-color: white;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  .cliente-title{
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 10px;
    padding-bottom: 20px;
    margin: 0;
    width: 100%;
    background-color: #ededed;
  }

  .clients-list-container{
    width: 100%;
    height: 100%;
    background-color: #ededed;
    overflow-y: scroll;

    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
`;