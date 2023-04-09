import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


const ProductsView1 = ({products}) => {

  return (
    <div>
      {products?.map((items,key)=>(
        <div key={key}>
          <img src={items.thumbnail} alt="" />
        </div>
      ))}
    </div>
  )
}

export default ProductsView1