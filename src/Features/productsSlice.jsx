import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { dataFile } from './dataFile'

const PRODUCTS_URL = 'https://fakestoreapi.com/products'

const initialState = {
    value: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get(PRODUCTS_URL)
        return response.data
    } catch (err) {
        return err.message
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.value.push(action.payload)
        },
        deleteProduct: (state, action) => {
            return state.value.filter((item, i) => i !== action.payload.index)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action)=>{
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                const loadedProducts = action.payload.map(product=>{
                    return product
                })

                state.value = state.value.concat(loadedProducts)
            })
            .addCase(fetchProducts.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllProducts = (state) => state.products.value
export const getproductsStatus = (state) => state.products.status
export const getProductsError = (state) => state.products.error
export const { addProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer