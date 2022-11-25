import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showAddForm } from '../Features/productsSlice'

function AddProduct() {
    const dispatch = useDispatch()

    const [titleErr, setTitleErr] = useState(false)
    const [descErr, setDescErr] = useState(false)
    const [ctgryErr, setCtgryErr] = useState(false)
    const [imageErr, setImageErr] = useState(false)
    const [priceErr, setPriceErr] = useState(false)

    const titleRef = useRef(null)
    const descRef = useRef(null)
    const imageRef = useRef(null)
    const priceRef = useRef(null)
    const rateRef = useRef(0)
    const ctgryRef = useRef(null)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (titleRef.current.value.trim() === '') { setTitleErr(true) }
        if (descRef.current.value.trim() === '') { setDescErr(true) }
        if (imageErr.current.value.trim() === '') { setImageErr(true) }
        if (priceRef.current.value.trim() === '') { setPriceErr(true) }
        if (ctgryRef.current.value.trim() === '') { setCtgryErr(true) }
    }

    return (
        <div className="container">
            <div className='frmDiv'>
                <form>
                    <h2><u>Add Product</u></h2>
                    {titleErr ? <p className="formErr" id='titleErr'>Kindly insert the title!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemTitle">Title:</label>
                        <input ref={titleRef} type="text" name='itemTitle' />
                    </div>
                    {descErr ? <p className="formErr" id='descErr'>Kindly insert product's description!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemDesc">Description:</label>
                        <input ref={descRef} type="text" name='itemDesc' />
                    </div>
                    {ctgryErr ? <p className="formErr" id='ctgryErr'>Please select a category!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemCategory">Category:</label>
                        <select ref={ctgryRef} name="itemCategory" id="itemCategory">
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select>
                    </div>
                    {imageErr ? <p className="formErr" id='imageErr'>The image url is required!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemImage">Image URL:</label>
                        <input ref={imageRef} type="text" name='itemImage' />
                    </div>
                    {priceErr ? <p className="formErr" id='priceErr'>The price is required!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemPrice">Price:</label>
                        <input ref={priceRef} type="text" name='itemPrice' />
                    </div>
                    <div className="form-element">
                        <input ref={rateRef} type="text" name='itemRating' hidden value={0} />
                    </div>
                    <div className="formBtns">
                        <button onClick={() => { dispatch(showAddForm(false)) }}>Cancel</button>
                        <button className='resetBtn' type='reset'>Reset</button>
                        <button className='submitBtn' onClick={handleOnSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct