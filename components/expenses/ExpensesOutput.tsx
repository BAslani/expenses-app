import { View, Text } from 'tamagui'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { colors } from 'assets/colors'
import { mockExpense } from 'assets/mockData'

type Props = {
  period: string
}

const ExpensesOutput = ({ period }: Props) => {
  return (
    <View f={1} px={24} pt={24} bg={colors.primary700}>
      <ExpensesSummary period={period} expenses={mockExpense} />
      <ExpensesList expenses={mockExpense} />
    </View>
  )
}

export default ExpensesOutput
