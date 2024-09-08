import { createSlice } from '@reduxjs/toolkit';

const dataStoreSlice = createSlice({
    name:"dataStore",
    initialState:{},
    reducers: {
        updateDataStore(state,action){
            return action.payload;
        }
    }
})

export const { updateDataStore} = dataStoreSlice.actions;
export default dataStoreSlice.reducer;