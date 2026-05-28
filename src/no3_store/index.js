import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice"
import user from "./slices/userSlice"

const store = configureStore({
    reducer : {
        todo, user
    }
})

export default store;