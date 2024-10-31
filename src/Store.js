import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filter/FilterSlice";
import categorySlice from "./features/categorize/CategorySlice";
import quizSlice from "./ui/quiz/QuizSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    filter: filterSlice,
    quiz : quizSlice,
    user : userSlice,
  },
});

export default store;
