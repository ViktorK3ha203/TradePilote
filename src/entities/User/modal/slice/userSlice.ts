import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserSchema, User} from '../types/user';
import { userRegisterApi, userLoginApi } from 'entities/User/apiConfig';


const USER_LOCALSTORAGE_KEY = 'user';

const initialState: UserSchema = {};

export const authenticateUser = createAsyncThunk('user/authenticateUser', async (credentials: { username: string, password: string }) => {
    const response = await axios.post(userLoginApi.api, credentials);
    return response.data;
});

export const registerUser = createAsyncThunk('user/registerUser', async (credentials: { username: string, password: string }) => {
    const response = await axios.post(userRegisterApi.api, credentials);
    return response.data;
});


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            const { username, token } = action.payload;
            state.authData = { username };
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({ username }));
            localStorage.setItem('token', token);
        });
        
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
