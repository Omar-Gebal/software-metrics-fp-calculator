import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import numberSlice from "./numberSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    numbers: numberSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = configureStore({ reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }) })
let persistor = persistStore(store)

export { store, persistor }