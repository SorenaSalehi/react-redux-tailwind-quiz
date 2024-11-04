import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: localStorage.getItem("userName") || "",
  gender: localStorage.getItem("gender") || "",
  userPoints: JSON.parse(localStorage.getItem("userPoints")) || 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    settingUser: {
      prepare(userName, gender) {
        return { payload: { userName, gender } };
      },
      reducer(state, action) {
        state.userName = action.payload.userName;
        localStorage.setItem("userName", action.payload.userName);
        state.gender = action.payload.gender;
        localStorage.setItem("gender", action.payload.gender);
      },
    },
    calcUserPoints(state, action) {
      state.userPoints += action.payload;
      JSON.stringify(localStorage.setItem("userPoints", state.userPoints));
    },
  },
});

export const { settingUser, calcUserPoints } = userSlice.actions;

export default userSlice.reducer;
