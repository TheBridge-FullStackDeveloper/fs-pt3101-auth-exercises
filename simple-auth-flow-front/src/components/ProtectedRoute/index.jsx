import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import authContext from '../../context/authContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(authContext);

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div>{children}</div>
  )
}
