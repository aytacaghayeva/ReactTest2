// reducer funksiyadir, store obyektdir


import { createSlice } from "@reduxjs/toolkit";




let initialState = {
    number: 0,
}

export const countSlice = createSlice({
    name: "Count",
    initialState,
    reducers: {
        plus(state = initialState) {
            return { ...state, number: state.number + 1 }
        },
        minus(state = initialState) {
            return { ...state, number: state.number - 1 }
        },
    }
})

export const {plus,minus} = countSlice.actions;
export const {reducer} = countSlice;