
import {createAction, createReducer} from "@reduxjs/toolkit"



const CHARACTER_STATE =[]


export const addCharacter = createAction ("add_Character")
export const removeCharacter = createReducer ("remove_Character")

export default createReducer(CHARACTER_STATE,{
    [addCharacter.type] : (state,action) => [...state, action.payload],
    [removeCharacter.type] : (state,action) => state.filter(item => item._id != action.payload)
})
   