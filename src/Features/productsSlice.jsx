import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const FIRE_PRODUCTS_URL = 'https://e-commerce-64fd7-default-rtdb.firebaseio.com/products.json'

const initialState = {
    value: [],
    status: 'idle',
    error: null,
    showAdd: false
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get(FIRE_PRODUCTS_URL)
        let productData = []
        for(let key in response.data){
            productData.push({
                category: response.data[key].category,
                description: response.data[key].description,
                id: response.data[key].id,
                image: response.data[key].image,
                price: response.data[key].price,
                rating: response.data[key].rating,
                title: response.data[key].title
            })
        }
        console.log(productData);
        return productData
    } catch (err) {
        return err.message
    }
})

export const addNewProduct = createAsyncThunk('products/addNewProduct', async (initialProduct) => {
    try {
        const response = await axios.post(FIRE_PRODUCTS_URL, initialProduct)
        return response.data
    } catch (error) {
        return error.message
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
        },
        showAddForm: (state, action) => {
            state.showAdd = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedProducts = action.payload.map(product => {
                    return product
                })

                state.value = state.value.concat(loadedProducts)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewProduct.fulfilled, (state, action) => {
                state.value.push(action.payload)
            })
    }
})

export const selectAllProducts = (state) => state.products.value
export const getproductsStatus = (state) => state.products.status
export const getProductsError = (state) => state.products.error
export const getShowAddForm = (state) => state.products.showAdd
export const { addProduct, deleteProduct, showAddForm } = productsSlice.actions
export default productsSlice.reducer