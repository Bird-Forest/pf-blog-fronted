import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/users' }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUser: builder.query({
      query: id => `/${id}`,
      providesTags: ['Users'],
    }),
    signUpUser: builder.mutation({
      query: values => ({
        url: '/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Users'],
    }),
    signInUser: builder.mutation({
      query: values => ({
        url: '/signin',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: values => ({
        url: '/update',
        method: 'PUT',
        body: values,
      }),
      invalidatesTags: ['Users'],
    }),
    updateAvatar: builder.mutation({
      query: formData => ({
        url: '/avatar',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Users'],
    }),
    updateLikes: builder.mutation({
      query: ({ id, count }) => ({
        url: `/${id}/counter`,
        method: 'PATCH',
        body: count,
      }),
      invalidatesTags: ['Users'],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        // method: 'DELETE',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignInUserMutation,
  useSignUpUserMutation,
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useLogOutUserMutation,
  useUpdateLikesMutation,
} = userApi;
