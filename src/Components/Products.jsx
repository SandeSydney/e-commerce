import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import SideNavigation from './SideNavigation'


const Products = () => {
  const products = useSelector((state) => state.products.value)

  const renderedProducts = products.map((product, id) => {
    return <ProductItem key={id} product={product} />
  })
  return (
    <div className='products'>
      <div className="sideNav">
        <SideNavigation />
      </div>
      <div className='productsDisplay'>{renderedProducts}</div>
    </div>
  )
}

export default Products