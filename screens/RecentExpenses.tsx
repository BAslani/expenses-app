import ExpensesOutput from 'components/expenses/ExpensesOutput'
import React, { useContext } from 'react'
import { ExpensesContext } from 'store/expensesContext'
import { getDateDifference } from 'utils/date'

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext)
  const today = new Date()
  const recentExpenses = expenses.filter((expense) => {
    const dateInRecent7Days = getDateDifference(today, 7)
    return expense.date > dateInRecent7Days
  })

  return (
    <ExpensesOutput
      period='Last 7 Days'
      expenses={recentExpenses}
      fallbackText='You have no expenses in the last 7 days!'
    />
  )
}

export default RecentExpenses
