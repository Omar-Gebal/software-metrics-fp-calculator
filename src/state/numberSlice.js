import React from "react";
import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    UFP: 0,
    TCF: 0,
    FP: 0,
    AVC: 0,
    LOC : 0,
};


const numberSlice = createSlice({
    name: "numbers",
    initialState,
    reducers: {
        updateUFP: (state, action) => {
            state.UFP = action.payload
        },
        updateTCF: (state, action) => {
            state.TCF = action.payload
        },
        updateFP: (state, action) => {
            state.FP = action.payload
        },
        updateAVC: (state, action) => {
            state.AVC = action.payload
        },
        updateLOC: (state, action) => {
            state.LOC = action.payload
        }

    },
});

export default numberSlice.reducer;
export const { updateTCF, updateUFP, updateFP, updateAVC, updateLOC} = numberSlice.actions