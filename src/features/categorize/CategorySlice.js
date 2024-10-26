import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 allCategorize:[],
  categoryName: "General Knowledge",
  categoryId: 9,
};


const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categorizeFetched(state,action){
      state.allCategorize = action.payload.trivia_categories
    },
    catSelected: {
      reducer(state, action) {
        state.categoryId = action.payload.categoryId;
        state.categoryName = action.payload.categoryName;
      },
      prepare( categoryName,categoryId) {
        
        return { payload: {  categoryName,categoryId } };
      },
    },
  },
});


export const { categorizeFetched,catSelected } = categorySlice.actions;

export default categorySlice.reducer;
