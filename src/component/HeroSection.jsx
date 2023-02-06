import React from 'react'

const HeroSection = () => {
  return (
        <div className="heroContainer">
            <h1 className='heroHeading'>React Paradise</h1>
            <img src={require('../assets/images/dev.webp')} alt='hero'/>
        </div>
  )
}

export default HeroSection;