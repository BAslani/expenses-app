import { View, Text } from 'tamagui'
import React from 'react'
import { Expense } from './ExpenseItem'
import { colors } from 'assets/colors'

type Props = {
  period: string
  expenses: Expense[]
}

const ExpensesSummary = ({ period, expenses }: Props) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)

  return (
    <View
      p={8}
      bg={colors.primary50}
      br={6}
      fd={'row'}
      jc={'space-between'}
      ai={'center'}
    >
      <Text fos={12} color={colors.primary400}>
        {period}
      </Text>
      <Text fos={16} fow={'bold'} color={colors.primary500}>
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  )
}

export default ExpensesSummary
