import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// let data
// const getFakeData = async () => {
//     await axios.get('https://fakestoreapi.com/products')
//         .then(res => data = res.data)
// }
// console.log(getFakeData())

const initialState = {
    value: [
        {
            name:'Chair',
            desc: 'massive brown chair',
            price: '30',
            img_url: 'http://www.chair.com/chair.jpg',
            discount_rate: '2'
        },
        {
            name:'Chair',
            desc: 'massive brown chair',
            price: '30',
            img_url: 'http://www.chair.com/chair.jpg',
            discount_rate: '2'
        },
        {
            name:'Chair',
            desc: 'massive brown chair',
            price: '30',
            img_url: 'http://www.chair.com/chair.jpg',
            discount_rate: '2'
        },
        {
            name:'Chair',
            desc: 'massive brown chair',
            price: '30',
            img_url: 'http://www.chair.com/chair.jpg',
            discount_rate: '2'
        }
    ]
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