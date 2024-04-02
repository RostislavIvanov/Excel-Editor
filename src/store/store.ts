import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from './tableData/tableDataSlice.ts';
export const store = configureStore({
    reducer: {
        tableDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
