import React from 'react'

function ProductItem({ product }) {
  return (
    <div className='productItem'>
      <img src={product.image} alt="product" />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.discount_rate}</p>
      <button className='addToCartBtn'>Add to Cart</button>
    </div>
  )
}

export default ProductItem