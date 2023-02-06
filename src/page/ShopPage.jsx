import React from 'react'
import ListProduct from './ListProduct'

const ShopPage = () => {
  return (
   <div className="shopContainer">
        <div className="left-section">
          <ul className='menu'>
            <h3>All Product</h3>
            <li>Books for programming</li>
            <li>Computers & Accessories</li>
            <li>Cell Phones & Accessories</li>
            <li>Digital Educational Resources</li>
            <li>Software</li> 
          </ul>
        </div>


        <div className="right-section">
            <div className="filter">
              <input type="range" />
            </div>
        <hr />
          <ListProduct/>
        </div>
   </div>
  )
}

export default ShopPage