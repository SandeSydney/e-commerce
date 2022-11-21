import React from 'react'
import { Link } from 'react-router-dom'

function SideNavigation() {
  const sort = ()=>{
    alert('Hello Sande')
  }
  return (
    <div className='sideNav'>
      <Link className='sideNavLinks' onClick={sort}>Ascending Order</Link>
      <Link className='sideNavLinks' to={'add-product'}>Add Product</Link>
    </div>
  )
}

export default SideNavigation