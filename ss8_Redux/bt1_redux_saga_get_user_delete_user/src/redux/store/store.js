import thunk from "redux-thunk";
import {rootReducer} from "../reducer";
import {applyMiddleware, createStore} from "redux";

const initialStore = {}
const middleware = [thunk]
export const store = createStore(
    rootReducer,
        initialStore,
        applyMiddleware(...middleware)
)