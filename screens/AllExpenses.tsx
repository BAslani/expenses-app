import ExpensesOutput from 'components/expenses/ExpensesOutput'
import React, { useContext, useEffect } from 'react'
import { fetchExpenses } from 'services/crud'
import { ExpensesContext } from 'store/expensesContext'

const AllExpenses = () => {
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
  return (
    <ExpensesOutput
      period='Total'
      expenses={expenses}
      fallbackText='You have no expenses yet!'
    />
  )
}

export default AllExpenses
