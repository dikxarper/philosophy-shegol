import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';

const rootReducer = combineReducers({
    menuSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;