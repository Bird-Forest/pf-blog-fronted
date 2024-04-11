import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../redux/PostsSlice';
import { userApi } from '../redux/UserSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
  blacklist: [postsApi.reducerPath, userApi.reducerPath],
};

const rootReducer = combineSlices({
  [postsApi.reducerPath]: postsApi.reducer,
  [userApi.reducerPath]: persistReducer(userPersistConfig, userApi.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    postsApi.middleware,
    userApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
