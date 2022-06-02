const createSlice = require('@reduxjs/toolkit').createSlice
const {cakeActions} = require('../cake/cakeSlice')

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
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOficeCreams--
        })
    },
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions