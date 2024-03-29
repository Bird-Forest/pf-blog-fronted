import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  // initialstate: {
  //   posts: [],
  // },
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      query: id => `/posts/${id}`,
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: post => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: builder.mutation({
      query: fields => ({
        url: `/posts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
