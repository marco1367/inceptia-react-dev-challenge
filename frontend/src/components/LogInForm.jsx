import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//actions:
import { UserLogIn } from '../redux/user/userAction';
import { useEffect } from 'react';


export default function LogInForm() {
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector(store => store.user);

  useEffect(() => {
    if (Object.keys(userStore).length > 0) {
      navigate('/dashboard');
    }
  }, [userStore]);

  const handleChanges = (event) => {
    const name = event.target.name;
    setStateValues({
      ...stateValues,
      [name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://admindev.inceptia.ai/api/v1/login/`, stateValues);
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(UserLogIn(response.data));
      setStateValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response);
      setStateValues({
        email: "",
        password: "",
      });
    }
  };


  return (
    <Container>
      <form onSubmit={(e) => { handleSubmit(e) }} >
        <input
          type={'email'}
          placeholder='Email'
          required
          name='email'
          value={stateValues.email}
          onChange={(e) => { handleChanges(e) }}
        />
        <input
          type={'password'}
          placeholder='Password'
          required
          name='password'
          value={stateValues.password}
          onChange={(e) => { handleChanges(e) }}
        />
        <button
          disabled={(stateValues.email === "" || stateValues.password === "") ? true : false}
        > Log In </button>
      </form>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  margin-top: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form{
    width: auto;
    height: auto;
    background-color: white;
    padding: 25px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    input, button{
      width: 300px;
      height: auto;
      padding: 5px 10px;
      margin: 10px;
      font-size: 18px;
    }

    button{
      width: auto;
    }
  }
`;