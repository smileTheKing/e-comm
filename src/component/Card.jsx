import React from 'react'

const Card = ({props,isReveal,isClicked}) => {

  return (
    <div className="card-container" onClick={isClicked}>
      { isReveal ? <h3 className='answer'>{props?.a}</h3>: <h3 className='question'>{props?.q}</h3>}
    </div>
  )
}

export default Card