import { createSelectorsFactory } from '@reduxjs/toolkit/dist/entities/state_selectors';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Post', 'User'],
  endpoints: build => ({
    getPosts: build.query({
      query: () => 'posts',
      providesTags: ['Post'],
    }),

    getUsers: build.query({
      query: () => 'users',
      providesTags: ['User'],
    }),

    refetchPostsAndUsers: build.mutation({
      // The query is not relevant here, so a `null` returning `queryFn` is used
      queryFn: () => ({ data: null }),
      // This mutation takes advantage of tag invalidation behaviour to trigger
      // any queries that provide the 'Post' or 'User' tags to re-fetch if the queries
      // are currently subscribed to the cached data
      invalidatesTags: ['Post', 'User'],
    }),
  }),
});

export const { useGetPostsQuery } = api;
// *** STORE ****
// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { postsApi } from '../redux/PostsSlice';
// import { userApi } from '../redux/UserSlice';

// export const store = configureStore({
//   reducer: {
//     [postsApi.reducerPath]: postsApi.reducer,
//     [userApi.reducerPath]: userApi.reducer,
//   },

//   // middleware: getDefaultMiddleware =>
//   // getDefaultMiddleware().concat(postsApi.middleware),
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     postsApi.middleware,
//     userApi.middleware,
//   ],
//   devTools: process.env.NODE_ENV !== 'production',
// });

// setupListeners(store.dispatch);

// ****
// const selectSelf = (state: State) => state;
// const unsafeSelector = createSelectorsFactory(selectSelf, state => state.value);
// const draftSafeSelector = createDraftSafeSelector(
//   selectSelf,
//   state => state.value
// );

// // in your reducer:

// state.value = 1;

// const unsafe1 = unsafeSelector(state);
// const safe1 = draftSafeSelector(state);

// state.value = 2;

// const unsafe2 = unsafeSelector(state);
// const safe2 = draftSafeSelector(state);

// *****
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// const apiUser = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/ ' }),
//   endpoints: build => ({
//     getRandomUserPosts: build.query({
//       async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
//         // get a random user
//         const randomResult = await fetchWithBQ('users/random');
//         if (randomResult.error) return { error: randomResult.error };
//         const user = randomResult.data;
//         const result = await fetchWithBQ(`user/${user.id}/posts`);
//         return result.data ? { data: result.data } : { error: result.error };
//       },
//     }),
//   }),
// });

// export const {} = apiUser
