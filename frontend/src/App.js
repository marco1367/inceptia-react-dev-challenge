import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//components:
import Layout from './components/layout/Layout';
import LogInForm from './components/LogInForm';
import Dashboard from './components/dashboard/Dashboard';


export default function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route path={'login'} element={<LogInForm />} />
        <Route path={'dashboard'} element={<Dashboard />} />
      </Route>
    </Routes>
  )
}