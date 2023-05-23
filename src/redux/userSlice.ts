import { createSlice } from '@reduxjs/toolkit'

interface userStateType {
  user: { username: string; uid: string } | null
  loading: boolean
  error: boolean
}

const userDefault: userStateType = {
  user: null,
  loading: false,
  error: false
}

const initialState: userStateType = { ...userDefault }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    loginFailure: state => {
      state.loading = false
      state.error = true
    },
    logout: state => {
      state.user = null
    }
  }
})

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions
export default userSlice.reducer
