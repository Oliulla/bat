// src/store/slice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
