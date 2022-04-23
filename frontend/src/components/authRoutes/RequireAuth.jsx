import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'



function RequireAuth({ children }) {
  const userStore = useSelector((store) => store.user)
  let location = useLocation();
  console.log(userStore)

  if (Object.keys(userStore).length > 0) {
    return children;
  }else{
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

}

export default RequireAuth;