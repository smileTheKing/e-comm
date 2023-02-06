import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

import mockData from '../MockData/mockApi'
const DisplayQuiz = () => {
   const [data,setData] = useState([])
   const [currentIndex,setCurrentIndex] = useState(0)
   const [isReveal,setIsReveal] = useState(false)
   
   useEffect(()=>{
    setData(mockData);


   },[])
   


    const handleIsClicked =(e) =>{
      e.preventDefault()
      setIsReveal(!isReveal)
    }


    const handleNext =(e)=>{  
      if(currentIndex>=data.length-1) return setCurrentIndex(0)

      setCurrentIndex(prevIndex => prevIndex + 1)
 
  }
    const handlePrev =()=>{
      if(index>=data.length) return setCurrentIndex(0)
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
    
    const index = currentIndex >= data.length
    ? data.length - 1
    : currentIndex < 0
      ? 0
      : currentIndex;

  return (
    <div className='QuizContainer'>
      <h1 className='heading'>{!isReveal? `Question ${index+1}`: `Answer ${index+1}`}</h1>

     <div className='center'>
      <button onClick={handlePrev} disabled={isReveal}>Prev</button>
        <Card isClicked={handleIsClicked} isReveal={isReveal} props={data[index]}/>
      <button onClick={handleNext} disabled={isReveal}>{currentIndex>=data.length -1?'Reset':'Next'}</button>
     </div>
    </div>
  )
}

export default DisplayQuiz