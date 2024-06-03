import { Expense } from 'components/expenses/ExpenseItem'
import { FC, PropsWithChildren, createContext, useState } from 'react'
import * as Crypto from 'expo-crypto'

type ExpensesContextState = {
  expenses: Expense[]
  addExpense: (expenseData: Omit<Expense, 'id'>) => void
  deleteExpense: (id: string) => void
  updateExpense: (expenseData: Expense) => void
}

const defaultExpensesContextState: ExpensesContextState = {
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
}

export const ExpensesContext = createContext<ExpensesContextState>(
  defaultExpensesContextState
)

const ExpensesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const addExpense = (expenseData: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      id: Crypto.randomUUID(),
      ...expenseData,
    }
    setExpenses((prevState) => [newExpense, ...prevState])
  }

  const deleteExpense = (id: string) => {
    setExpenses((prevState) => prevState.filter((expense) => expense.id !== id))
  }

  const updateExpense = (expenseData: Expense) => {
    setExpenses((prevState) =>
      prevState.map((expense) =>
        expense.id === expenseData.id ? expenseData : expense
      )
    )
  }

  const value = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
