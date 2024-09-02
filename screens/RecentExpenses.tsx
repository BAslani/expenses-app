import ExpensesOutput from 'components/expenses/ExpensesOutput'
import React, { useContext, useEffect } from 'react'
import { fetchExpenses } from 'services/crud'
import { ExpensesContext } from 'store/expensesContext'
import { getDateDifference } from 'utils/date'

const RecentExpenses = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext)
  useEffect(() => {
    try {
      fetchExpenses().then((response) => {
        if (response) {
          setExpenses(response)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const today = new Date()
  const recentExpenses = expenses.filter((expense) => {
    const dateInRecent7Days = getDateDifference(today, 7)
    const timeStamp = new Date(expense.date)
    return timeStamp > dateInRecent7Days
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
