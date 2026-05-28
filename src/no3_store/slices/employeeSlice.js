import { createSlice } from "@reduxjs/toolkit"

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]
const initialEmp = {
  id: '', name: '', email: '', job: '', pay:''
}
const initalState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: '',
  selectedId: ""
}

const employeeSlice = createSlice({
    name : "employeeSlice",
    initalState,
    reducers : {
        select :(state, action) =>{
            state.selectedId = action.payload
        },
        setEmp : (state, action)=> {
            state.emp = action.payload
        },
        register : (state, action)=> {
            state.empTable = [
                ...state.empTable,
                {
                    ...action.payload.emp,
                    id : action.payload.id
                }
            ]
        },
        update : ( state, action) => {
            state.empTable = state.empTable.map(emp=>(
                emp.id === state.selectedId ?
                action.payload 
                : emp
            ))
        },
        remove : (state) => {
            state.empTable = state.empTable.filter(emp=>(
                emp.id !== state.selectedId
            ))
        },
        mode : (state, action) => {
            state.mode = action.payload
        }
    }
})


export const {mode, remove, update, register, setEmp, select } = employeeSlice.actions;
export default employeeSlice.reducer;