import { View, Text } from 'tamagui'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { colors } from 'assets/colors'

type Props = {
  period: string
}

const mockExpense = [
  { id: 'e1', title: 'glasses', amount: 79.99, date: new Date('2023-12-15') },
  { id: 'e2', title: 't-shirt', amount: 29.99, date: new Date('2023-11-15') },
  { id: 'e3', title: 'eggs', amount: 9.99, date: new Date('2023-12-18') },
  { id: 'e4', title: 'book', amount: 59, date: new Date('2023-10-11') },
  {
    id: 'e5',
    title: 'mobile',
    amount: 344.99,
    date: new Date('2024-03-07'),
  },
]

const ExpensesOutput = ({ period }: Props) => {
  return (
    <View f={1} p={24} bg={colors.primary700}>
      <ExpensesSummary period={period} expenses={mockExpense} />
      <ExpensesList expenses={mockExpense} />
    </View>
  )
}

export default ExpensesOutput
