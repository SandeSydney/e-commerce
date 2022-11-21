import React from 'react'

function ProductItem({ product }) {
  return (
    <div className='productItem'>
      <img src={product.img_url} alt="product image" />
      {product.name}
      {product.desc}
      {product.price}
      {product.discount_rate}
    </div>
  )
}

export default ProductItem