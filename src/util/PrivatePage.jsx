import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivatePage = ({isLogin}) => {
  if(!isLogin) return  <Navigate to='/welcome'/>
  return (

       <Outlet/>    
  )
}

export default PrivatePage