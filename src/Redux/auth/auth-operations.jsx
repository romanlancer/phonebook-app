import axios from 'axios';
import errorSound from 'assets/error-sound.mp3';
import toastyMK from 'assets/Mortal_Kombat_4_Toasty_Sound_Effect.mp3';
import Toasty from 'assets/toasty.webp';
import { MdError } from 'react-icons/md';
import Player from 'components/Player/Player';
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    data.user &&
      toast.success('', {
        icon: () => (
          <>
            <Player url={toastyMK} />
            <img
              width={100}
              height={100}
              src={Toasty}
              alt="toasty"
              className="me-4"
            />
            <p>Welcome !!! You are successfully logged in</p>
          </>
        ),
      });
    token.set(data.token);
    return data;
  } catch (error) {
    error?.response?.data?.name === 'MongoError' &&
      toast.error('User already exists!', {
        icon: () => (
          <>
            <MdError size={24} color="var(--toastify-color-error)" />
            <Player url={errorSound} />
          </>
        ),
      });
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);

    data.user &&
      toast.success('', {
        icon: () => (
          <>
            <Player url={toastyMK} />
            <img
              width={100}
              height={100}
              src={Toasty}
              alt="toasty"
              className="me-4"
            />
            <p>Welcome !!! You are successfully logged in</p>
          </>
        ),
      });
    token.set(data.token);
    return data;
  } catch (error) {
    error.response?.status === 400 &&
      toast.error('Incorrect email or password', {
        icon: () => (
          <>
            <MdError size={24} color="var(--toastify-color-error)" />
            <Player url={errorSound} />
          </>
        ),
      });
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    error &&
      toast.error('Sorry, an error occurred', {
        icon: () => (
          <>
            <MdError size={24} color="var(--toastify-color-error)" />
            <Player url={errorSound} />
          </>
        ),
      });
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return state;
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
