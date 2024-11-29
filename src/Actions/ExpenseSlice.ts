import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/store'

// Define a type for the slice state
interface Expense {
  id: number,
  name:string,
  amount:number,
  type:string
}

interface ExpenseState {
    expenses: Expense[];
    budget: number;
  }
  
  const initialState: ExpenseState = {
    expenses: [],
    budget: 2000, 
  };


export const expenseSlice = createSlice({
  name: 'expenses',
  
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
     state.expenses.push(action.payload)
    },
    removeExpense: (state, action: PayloadAction<Expense>) => {
       state.expenses.filter(expense =>expense.id != action.payload.id)
      },
      updateBudget: (state, action: PayloadAction<number>) => {
        state.budget = action.payload;
      },
  },
})

export const { addExpense, removeExpense, updateBudget } = expenseSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default expenseSlice.reducer