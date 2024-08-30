import React from 'react'
import { FlatList } from 'react-native'
import ExpenseItem, { type Expense } from './ExpenseItem'

type Props = {
  expenses: Expense[]
}

const ExpensesList = ({ expenses }: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={expenses}
      renderItem={({ item }) => <ExpenseItem {...item} />}
    />
  )
}

export default ExpensesList
