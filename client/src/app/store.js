import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import navigationReducer from '../features/counter/navigationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer
  },
});
