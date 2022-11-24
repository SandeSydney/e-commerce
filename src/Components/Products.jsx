import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProducts, getProductsError, getproductsStatus, fetchProducts } from '../Features/productsSlice'
import ProductItem from './ProductItem'
import SideNavigation from './SideNavigation'
import load from '../Assets/loading.gif'


const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(selectAllProducts)
  const status = useSelector(getproductsStatus)
  const error = useSelector(getProductsError)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  let content
  if (status === 'loading') {
    // content = <img src="loadGif" alt="Loading" />
    content = <div className='loadingDiv'><img src={load} alt="Loading..." /></div>
  } else if (status === 'succeeded') {
    content = products.map((product, id) => {
      return <ProductItem key={id} product={product} />
    })
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <div className='products'>
      <div className="sideNav">
        <SideNavigation />
      </div>
      <div className='productsDisplay'>
        {/* <Outlet /> */}
        {content}
      </div>
    </div>
  )
}

export default Products