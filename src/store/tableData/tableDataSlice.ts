import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableDataType } from '~/types/tableTypes.ts';

type InitialStateType = {
    data: TableDataType;
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
        initData: (state, action: PayloadAction<TableDataType>) => {
            state.data = action.payload;
        },
        updateData: (state, action: PayloadAction<{ newValue: string | null, row: number, col: number }>) => {
            const { row, col, newValue } = action.payload;
            const currentRow = state.data[row];
            const currentKeys = Object.keys(currentRow);
            const keyToUpdate = currentKeys[col];

            state.data[row] = {
                ...currentRow,
                [keyToUpdate]: newValue,
            };
        },
    },
});

export const { initData, updateData } = tableDataSlice.actions;
export default tableDataSlice.reducer;
