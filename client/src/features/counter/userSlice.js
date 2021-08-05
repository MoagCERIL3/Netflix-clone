import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  newUser: {
    email : null
  },
  currentUser: null,
  selectedProfile: null,
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { 
    initialSignup: (state,action) =>{
      state.newUser = action.payload;
    },

    signin:(state,action)=>{
      state.currentUser = action.payload;
    },

    signout:(state)=>{
      state.currentUser = null;
    }
   


  },
 
});

export const { initialSignup, signin, signout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNewUser = (state) => state.user.newUser.email;
export const currentUser = (state) => state.user.currentUser;



export default userSlice.reducer;
