import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    difficulty:'any difficulty',
    type:"any type",
    quizNumber:'3',
    quizTime: 180
}
const filterSlice = createSlice({
    name:'filter',initialState,reducers:{
        changedDifficulty(state,action){
            state.difficulty = action.payload
        },
        changedType(state,action){
            state.type = action.payload
        },
        changedNum(state,action){
            state.quizNumber = action.payload
            state.quizTime = Number(state.quizNumber) * 60
        },
        
    }
})
export const {changedDifficulty,changedType,changedNum} = filterSlice.actions

export default filterSlice.reducer