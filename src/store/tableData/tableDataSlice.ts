import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableDataType } from '~/types/tableTypes.ts';
import { formatDate, formDigit, getObjectKeyTypes } from '~/utils/utils.ts';

type InitialStateType = {
    data: TableDataType;
    columnTypes: string[];
    chosenCol: number;
}

const initialState: InitialStateType = {
    data: [],
    columnTypes: [],
    chosenCol: -1,
};

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<TableDataType>) => {
            const rawData = action.payload;
            state.columnTypes = getObjectKeyTypes(action.payload[0]);
            state.columnTypes.forEach((type, typeIndex) => {
                if (type === 'object') {
                    const keyToUpdate = Object.keys(rawData[0])[typeIndex];
                    rawData.forEach((row) => {
                        row[keyToUpdate] = formatDate(row[keyToUpdate]);
                    });
                }
            });
            state.data = rawData;
        },
        updateCell: (state, action: PayloadAction<{ newValue: string | null, row: number, col: number }>) => {
            const { row, col, newValue } = action.payload;
            const currentRow = state.data[row];
            const currentKeys = Object.keys(currentRow);
            const keyToUpdate = currentKeys[col];

            let typedValue;
            switch (state.columnTypes[col]) {
                case 'number': {
                    if (newValue) {
                        typedValue = Number(formDigit(newValue));
                    }
                    break;
                }
                default: {
                    typedValue = String(newValue);
                    break;
                }
            }
            state.data[row] = {
                ...currentRow,
                [keyToUpdate]: typedValue,
            };
        },
        updateColumn: (state, action: PayloadAction<{ type: string, col: number }>) => {
            const { type, col } = action.payload;
            state.data.forEach((row, index) => {
                const keyToUpdate = Object.keys(state.data[index])[col];
                switch (type) {
                    case 'number': {
                        row[keyToUpdate] = Number(row[keyToUpdate]);
                        break;
                    }
                    case 'string': {
                        row[keyToUpdate] = String(row[keyToUpdate]);
                        break;
                    }
                    case 'object': {
                        row[keyToUpdate] = formatDate(row[keyToUpdate]);
                        break;
                    }
                    default: {
                        row[keyToUpdate] = String(row[keyToUpdate]);
                        break;
                    }
                }

            });
        },
        chooseColumn: (state, action: PayloadAction<number>) => {
            state.chosenCol = action.payload;
        },
        changeColumnType: (state, action: PayloadAction<string>) => {
            state.columnTypes[state.chosenCol] = action.payload;
        },
    },
});

export const { initData, updateCell, chooseColumn, changeColumnType, updateColumn } = tableDataSlice.actions;
export default tableDataSlice.reducer;
