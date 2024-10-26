import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filter/FilterSlice";
import categorySlice from "./features/categorize/CategorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    filter: filterSlice,
  },
});

export default store;
