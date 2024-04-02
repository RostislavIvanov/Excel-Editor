import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = Record<string, string | number | Date>[]

const initialState: InitialStateType = [];
export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        initData: (_state, action: PayloadAction<InitialStateType>) => {
            return action.payload;
        },
    },
});

export const { initData } = tableDataSlice.actions;
export default tableDataSlice.reducer;
