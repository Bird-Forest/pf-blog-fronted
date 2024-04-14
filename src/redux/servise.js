import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api/users';
// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
/*
 * POST @ /users/signup * body: { name, email, password }
 */
export const signUpUser = createAsyncThunk(
  'auth/signup',
  async (values, thunkAPI) => {
    try {
      const res = await axios.post('/signup', values);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/login  * body: { email, password }
 */
export const signInUser = createAsyncThunk(
  'auth/signin',
  async (values, thunkAPI) => {
    try {
      const res = await axios.post('/signin', values);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getuser',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.get(`/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * PUT @ /users/updateName  * headers: Authorization: Bearer token
 */
export const updateLikes = createAsyncThunk(
  'auth/updateLikes',
  async ({ id, likes }, thunkAPI) => {
    console.log(id, likes);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.patch(`/${id}/likes`, likes);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /users/updateAvatar  * headers: Authorization: Bearer token
 */
export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (formData, thunkAPI) => {
    // console.log(formData);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.post('/users/avatar', formData);
      setAuthHeader(res.data.token);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * PUT @ /users/updateName  * headers: Authorization: Bearer token
 */
export const updateUser = createAsyncThunk(
  'auth/updateName',
  async (values, thunkAPI) => {
    // console.log(values);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.patch('/users/update/', values);
      setAuthHeader(res.data.token);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/logout  * headers: Authorization: Bearer token
 */
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      await axios.post('/logout');

      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * GET @ /users/current * headers: Authorization: Bearer token
 */
// export const refreshThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;
//     if (token === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       const res = await axios.get('/users/current');
//       setAuthHeader(res.data.token);
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
