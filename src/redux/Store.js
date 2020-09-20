import { createStore, applyMiddleware,combineReducers } from "redux";
import Reducer from './Reducer'
import thunk from "redux-thunk";


const initialState = {};
const rootReducer = combineReducers({
    Reducer
});

const Store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default Store;