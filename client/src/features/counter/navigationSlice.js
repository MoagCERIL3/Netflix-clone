import {  createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    showSignInCard: false
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { 
    
    showCard: (state,action) =>{
      state.showSignInCard = action.payload;
    }


  },
  
});

export const { showCard } = navigationSlice.actions;


export const selectshowSignInCard = (state) => state.navigation.showSignInCard;



export default navigationSlice.reducer;
