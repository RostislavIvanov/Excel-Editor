import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableDataType } from '~/types/tableTypes.ts';
import { formatDate, getObjectKeyTypes } from '~/utils/utils.ts';

type InitialStateType = {
    data: TableDataType;
    columnTypes: string[];
    chosenCol: string;
}

const initialState: InitialStateType = {
    data: [],
    columnTypes: [],
    chosenCol: '',
};

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<TableDataType>) => {
            state.data = action.payload;
            state.columnTypes = getObjectKeyTypes(action.payload[0]);
        },
        updateCell: (state, action: PayloadAction<{ newValue: string | null, row: number, col: number }>) => {
            const { row, col, newValue } = action.payload;
            const currentRow = state.data[row];
            const currentKeys = Object.keys(currentRow);
            const keyToUpdate = currentKeys[col];

            state.data[row] = {
                ...currentRow,
                [keyToUpdate]: newValue,
            };
        },
        chooseColumn: (state, action: PayloadAction<number>) => {
            state.chosenCol = action.payload;
        },
        changeColumnType: (state, action: PayloadAction<string>) => {
            state.columnTypes[state.chosenCol] = action.payload;
        },
    },
});

export const { initData, updateData } = tableDataSlice.actions;
export default tableDataSlice.reducer;
