import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = ({setIsLogin}) => {
  const navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault()
    alert('hello')
    setIsLogin(true)
    navigate('/store')
  }
  return (
    <div className='container'>
      <h1 className='heading'>Welcome to my React App</h1>
        <button onClick={handleClick}>click to continus</button>
        
    </div>
  )
}

export default WelcomePage