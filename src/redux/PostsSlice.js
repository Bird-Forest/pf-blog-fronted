import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const auth = JSON.parse(localStorage.getItem('persist:auth'));
// console.log(auth);
const tokenAuth = auth.token;
// console.log(tokenAuth);
const token = tokenAuth ? tokenAuth.replace(/"/g, '') : ' ';
console.log(token);

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    getUserPosts: builder.query({
      query: () => ({
        url: '/posts/user',
        method: 'GET',
        headers: {
          authorization:
            (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
        },
      }),
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      query: id => ({
        url: `/posts/${id}`,
        method: 'GET',
        headers: {
          authorization:
            (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
        },
      }),
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: post => ({
        url: '/posts',
        method: 'POST',
        headers: {
          authorization:
            (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
        },
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        headers: {
          authorization:
            (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
        },
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: builder.mutation({
      query: ({ id, post }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        headers: {
          authorization:
            (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
        },
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useGetUserPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;

// headers: {
//   authorization:
//     (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
// },

// const baseQuery = fetchBaseQuery({
//   baseUrl: '/',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }

//     return headers;
//   },
// });
