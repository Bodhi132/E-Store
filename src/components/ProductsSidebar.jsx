import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PrductsSidebar = () => {

  const [categories, setCategories] = useState([])
  const [clickedCategory, setClickedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(0)

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories').then((res) => {

      setCategories(res.data)

    })
  }, [])


  return (
    <div>
      <form>
        <input type='text' placeholder='Search' />
        <div>
          <h5 className='text-xl'>Category</h5>
          <div className='flex flex-col '>
            {
              categories.slice(0, 7).map(category =>
                <div key={category} className='mt-2'>
                  <button className='bg-white'>{category}</button>
                </div>
              )
            }
          </div>
          <div>
            <h2>Price</h2>
            <p>${priceRange}</p>
            <input type="range" name="" id="" min="0" max="40000"
              onChange={(event)=>{setPriceRange(event.target.value)}}/>
          </div>
          <button>Clear Filters</button>
        </div>
      </form>
    </div>
  )
}

export default PrductsSidebar