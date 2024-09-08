import { createSlice } from '@reduxjs/toolkit';

const jwtStoreSlice = createSlice({
    name:"jwtStore",
    initialState:{
        token:localStorage.getItem('DiabetesGuard') || '',
    },
    reducers: {
        updateJwtStore(state, action) {
            const token = action.payload;
            state.token = token;
            localStorage.setItem('DiabetesGuard', token);
        },
    }
})

export const { updateJwtStore} = jwtStoreSlice.actions;
export default jwtStoreSlice.reducer;