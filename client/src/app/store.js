import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import navigationReducer from '../features/counter/navigationSlice';
import throttle from 'lodash/throttle'

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.error(e);
  }
};

const persistedStore = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer
  },
},persistedStore);

store.subscribe(throttle(() => {
  
  saveToLocalStorage(store.getState())
}, 1000)) 
