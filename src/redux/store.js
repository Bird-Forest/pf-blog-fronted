import {
  // combineSlices,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../redux/PostsSlice';
import { authReducer } from '../redux/AuthSlice';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
  // blacklist: [postsApi.reducerPath],
};

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
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
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
