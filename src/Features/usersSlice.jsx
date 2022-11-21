import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    logged: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        loginUser: (state) => {
            state.logged = true
        },
        logoutUser: (state) => {
            state.logged = false
        },
        removeUser: (state, action) => {
            return state.value.filter((item, i) => i !== action.payload.index)
        }
    }
})

export const { addUser, loginUser, logoutUser, removeUser } = usersSlice.actions

export default usersSlice.reducer