import React from 'react'

function AddProduct() {

    const handleOnSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className='addProduct'>
                <form className='addProdForm'>
                    <h2><u>Add Product</u></h2>
                    <div className="form-element">
                        <label htmlFor="itemName">Name:</label>
                        <input type="text" name='itemName' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="itemDesc">Description:</label>
                        <input type="text" name='itemDesc' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="itemPrice">Price:</label>
                        <input type="text" name='itemPrice' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="itemImageUrl">Image URL:</label>
                        <input type="text" name='itemImageUrl' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="itemDiscount">Discount:</label>
                        <input type="text" name='itemDiscount' />
                    </div>
                    <div className="formBtns">
                        <button type="reset">Reset</button>
                        <button type="submit" onClick={()=>{handleOnSubmit()}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct