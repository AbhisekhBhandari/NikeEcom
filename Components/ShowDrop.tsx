import React from 'react'

const ShowDrop = () => {
  return (
    <div className='hidden md:flex cursor-pointer'>
        <label htmlFor='sortFilter' >Sort By:</label>
        <select  id='sortFilter' onChange={(e)=>{console.log(e.target.value);
        }}>
          <option disabled value=''  defaultChecked></option>
          <option value='newest'>Newest</option>
          <option value='featured'>Featured</option>
          <option value='priceHighToLow'>Price: High-Low</option>
          <option value='priceLowToHigh'>Price: Low-High</option>

        </select>

    </div>
  )
}

export default ShowDrop
