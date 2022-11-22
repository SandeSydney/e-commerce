import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { dataFile } from './dataFile'

// let data
// const getFakeData = async () => {
//     await axios.get('https://fakestoreapi.com/products')
//         .then(res => data = res.data)
// }
// console.log(getFakeData())

const initialState = {
    value: dataFile,
    loading: 'idle'
}

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
    }
})

export const { addProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer