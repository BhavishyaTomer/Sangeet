import { configureStore } from '@reduxjs/toolkit'
import sangeetReducer from './sangeetslice.js'

export const store = configureStore({
  reducer: {
    sangeet:sangeetReducer
  },
})