import React from 'react'
import { useState,useEffect } from 'react'
import PrductsSidebar from '../components/ProductsSidebar'
import ProductsView1 from '../components/ProductsView1'
import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get('https://dummyjson.com/products').then((res)=>{
      setProducts(res.data.products)
    })
    
  }, [])

  console.log(products);


  return (
    <div className='flex flex-row'>
        <PrductsSidebar />
        <ProductsView1 products={products}/>
    </div>
  )
}

export default Products