import { View, Text } from 'tamagui'
import React from 'react'

export type Expense = {
  id: string
  title: string
  amount: number
  date: Date
}

const ExpenseItem = ({ id, title, amount, date }: Expense) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default ExpenseItem
