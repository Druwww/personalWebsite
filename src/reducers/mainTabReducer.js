import { createSlice } from '@reduxjs/toolkit'

export const mainTabReducer = createSlice({
    name: 'mainTab',
    initialState: {
        page : 1
    },
    reducers: {
        update: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { update } = mainTabReducer.actions;

export const selectMainTab = state => state.mainTab;

export default mainTabReducer.reducer;