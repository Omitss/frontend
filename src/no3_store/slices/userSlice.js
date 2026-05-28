import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"
import { register } from "./todoSlice"


const initialUsers = [
  {id: 1, username: "john", password: "1111"},
  {id: 2, username: "peter", password: "1111"},
  {id: 3, username: "susan", password: "1111"},
  {id: 4, username: "sue", password: "1111"},
]
const initalState = {
    users: initialUsers,
    username: '',
    isLogin: false
}

const userSlice = createSlice({
    name : "userSlice",
    initalState,
    reducers : {
        login : (state, action) => {
            state.username =  action.payload,
            state.isLogin = true
        },
        register : (state, action) => {
            state.users = [
                ...state.users,
                {
                    id : action.payload.id,
                    username : action.payload.user.username,
                    password : action.payload.password
                }
            ]
        },
        logout : (state) => {
            state.isLogin = false,
            state.username = " "
        }
    },
})

export const {login, register, logout} = userSlice.actions;
export default userSlice.reducer;