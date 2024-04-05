import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    data: Record<string, any>[];
    chosenCol: string;
}

const initialState: InitialStateType = {
    data: [],
    chosenCol: '',
};

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<Record<string, any>[]>) => {
            state.data = action.payload;
        },
    },
});

export const { initData } = tableDataSlice.actions;
export default tableDataSlice.reducer;
