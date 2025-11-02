const { configureStore, createSlice } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore;