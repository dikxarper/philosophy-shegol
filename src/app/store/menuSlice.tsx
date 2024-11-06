import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContentHeightStateProps {
    contentHeight: number;
}

const initialState: ContentHeightStateProps = {
    contentHeight: 91,
};

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        addContentHeight: (state, action: PayloadAction<number>) => {
            state.contentHeight += action.payload;
        },
        reduceContentHeight: (state, action: PayloadAction<number>) => {
            state.contentHeight -= action.payload;
        },
    },
});

export const { addContentHeight, reduceContentHeight } = menuSlice.actions;
export default menuSlice.reducer;