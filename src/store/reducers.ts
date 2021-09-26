import counterReducer from "@/components/test/counter/counterSlice";
import userReducer from "@/store/user";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});
