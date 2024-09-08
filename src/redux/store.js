import {configureStore} from "@reduxjs/toolkit";
import jwtStoreSlice from "./jwtStore";
import dataStoreSlice from "./dataStore";

const store = configureStore({
    reducer:{
        jwtStore:jwtStoreSlice,
        dataStore:dataStoreSlice,
    }
});

export default store;