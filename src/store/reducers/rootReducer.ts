import {combineReducers} from "redux";
import {marketFirstReducer} from "./marketFirstReducer";

export const rootReducer = combineReducers({
    first: marketFirstReducer
})

export type RootState = ReturnType<typeof rootReducer>