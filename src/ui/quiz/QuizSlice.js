import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizError: "",
  quiz: JSON.parse(localStorage.getItem("results")) || [],
  quizLength: "",
  quizIndex: 0,
  quizPoints: 0,
  hasAnswered: false,
  isAnswerTrue: "",
  quizFinished: {
    isFinished: false,
    totalPoints: 0,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    gotError(state, action) {
      state.quizError = action.payload;
    },
    quizzesFetched: {
      prepare(results, dataLength) {
        return { payload: { results, dataLength } };
      },
      reducer(state, action) {
        
        state.quiz = action.payload.results.results;
        state.quizLength = action.payload.results.dataLength;
      },
    },
    checkingAnswer: {
      prepare(answer, correctAnswer) {
        return { payload: { answer, correctAnswer } };
      },
      reducer(state, action) {
        action.payload.answer === action.payload.correctAnswer
          ? (state.isAnswerTrue = true)
          : (state.isAnswerTrue = false);

        state.hasAnswered = true;
      },
    },
    calcPoints(state, action) {
      if (state.quizIndex < state.quizLength && state.isAnswerTrue) {
        if (action.payload === "easy") state.quizPoints += 5;
        if (action.payload === "medium") state.quizPoints += 10;
        if (action.payload === "hard") state.quizPoints += 15;
      }
    },
    nextQuestion(state) {
      if (state.quizIndex < state.quizLength) {
        state.quizIndex += 1;
        state.hasAnswered = false;
        state.isAnswerTrue = "";
      }
    },

    quizFinishedAction(state) {
      if (state.quizIndex === state.quizLength) {
        state.quizFinished.isFinished = true;
        state.quiz = [];
        state.quizLength = "";
        state.quizIndex = 0;
      }
    },
    resettingQuiz(state) {
      state.quizFinished.isFinished = false;
      state.quiz = [];
      state.quizError = ''
      state.quizPoints = 0;
      state.hasAnswered = false;
      state.isAnswerTrue = "";
    },
  },
});

export const {
  gotError,
  quizzesFetched,
  checkingAnswer,
  nextQuestion,
  calcPoints,
  quizFinishedAction,
  resettingQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
