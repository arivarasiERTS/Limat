import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOficeCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOficeCreams--
        },
        restocked: (state, action) => {
            state.numOficeCreams += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOficeCreams--
        })
    },
})

export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions