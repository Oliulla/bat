// src/store/pathSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    currentPath: 'my-profile', // Default path
};

// Create the slice
const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        setCurrentPath(state, action) {
            state.currentPath = action.payload; // Update currentPath with the new value
        },
    },
});

// Export the action to update the current path
export const { setCurrentPath } = pathSlice.actions;

// Export the reducer to be used in the store
export default pathSlice.reducer;
