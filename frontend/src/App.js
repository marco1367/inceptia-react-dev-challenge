import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//components:
import Layout from './components/layout/Layout';


export default function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route path={'login'} element={<h1> log in </h1>} />
        <Route path={'dashboard'} element={<h1> dashboard </h1>} />
      </Route>
    </Routes>
  )
}






  // useEffect(() => {
  //   functionLogIn();
  // }, []);

  // const functionLogIn = async () => {
  //   try {
  //     const response = await axios.post(`https://admindev.inceptia.ai/api/v1/login/`, {
  //       "email": "reactdev@iniceptia.ai",
  //       "password": "4eSBbHqiCTPdBCTj",
  //     });
  //     console.log('response: ', response.data.token);//------
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };