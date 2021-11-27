import {combineReducers} from "redux";
import {marketReducer} from "./marketReducer";

export const rootReducer = combineReducers({
    first: marketReducer
})

export type RootState = ReturnType<typeof rootReducer>