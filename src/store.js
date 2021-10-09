import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatReducer from "./Chat/chatSlice";
import catReducer from "./Cats/catSlice";
import catsHTTPReducer from "./CatsHTTP/catsHTTPSlice";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cats", "catsHTTP"],
};

const reducers = combineReducers({ chat: chatReducer, cats: catReducer, catsHTTP: catsHTTPReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
