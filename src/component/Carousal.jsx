import React from 'react'

const Carousal = () => {
  return (
    <div className="wrap">
         <h3>Favorite React BlogSite</h3>
    <div className="carousalContainer">
            <img src={require('../assets/images/woman.webp')} alt='hero'/>
            <img src={require('../assets/images/woman.webp')} alt='hero'/>
            <img src={require('../assets/images/woman.webp')} alt='hero'/>
            <img src={require('../assets/images/woman.webp')} alt='hero'/>
            <img src={require('../assets/images/woman.webp')} alt='hero'/>          
    </div>

    </div>
  )
}

export default Carousal;
