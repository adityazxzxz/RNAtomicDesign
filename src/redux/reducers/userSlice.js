import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.email
            state.isLogin = true
        },
        logout: (state) => {
            state.email = ''
            state.isLogin = false
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer