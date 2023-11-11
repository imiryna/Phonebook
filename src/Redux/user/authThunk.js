import { createAsyncThunk } from '@reduxjs/toolkit';
import {userLogin, userSignup } from 'services/authApi';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
      try {
        const response = await userLogin(formData);
        console.log( 'response: ', response)
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const registerThunk = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
      try {
        const authData = await userSignup(formData);
        console.log('response: ', authData)
        return authData;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
