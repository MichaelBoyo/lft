import { configureStore } from '@reduxjs/toolkit';

import api from './api';
import AppSlice from './appSlice';

const store = configureStore({
  reducer: {
    [AppSlice.name]: AppSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
