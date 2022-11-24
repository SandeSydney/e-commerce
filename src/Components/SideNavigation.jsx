import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getShowAddForm, showAddForm } from '../Features/productsSlice'

function SideNavigation() {
  const showAdd = useSelector(getShowAddForm)
  const dispatch = useDispatch()

  return (
    <div className='sideNav'>
      {showAdd ? '' : <button>
        <Link className='sideNavLinks' to={'add-product'} onClick={() => dispatch(showAddForm(true))}>
          Add Product
        </Link>
      </button>}
    </div>
  )
}

export default SideNavigation