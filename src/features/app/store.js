import { configureStore } from '@reduxjs/toolkit'
import displayReducer from '../display/displaySlice'

export default configureStore({
    reducer: {
        display: displayReducer,
    }
})