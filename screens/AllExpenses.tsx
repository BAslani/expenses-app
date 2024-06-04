import ExpensesOutput from 'components/expenses/ExpensesOutput'
import React, { useContext } from 'react'
import { ExpensesContext } from 'store/expensesContext'

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext)
  return (
    <ExpensesOutput
      period='Total'
      expenses={expenses}
      fallbackText='You have no expenses yet!'
    />
  )
}

export default AllExpenses
