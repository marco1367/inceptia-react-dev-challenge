import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//components:
import Layout from './components/layout/Layout';
import LogInForm from './components/LogInForm';
import Dashboard from './components/dashboard/Dashboard';
import Content from './components/dashboard/container-header-content/content/Content';
import Home from './components/Home';
import RequireAuth from './components/authRoutes/RequireAuth';



export default function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={'login'} element={<LogInForm />} />
        <Route
          path={'dashboard'}
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<h1>preview</h1>} />
          <Route path={':id'} element={<Content />} />
        </Route>
      </Route>
    </Routes>
  )
}