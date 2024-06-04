import { View, Text } from 'tamagui'
import React, { useContext } from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { colors } from 'assets/colors'
import { Expense } from './ExpenseItem'

type Props = {
  period: string
  expenses: Expense[]
  fallbackText: string
}

const ExpensesOutput = ({ period, expenses, fallbackText }: Props) => {
  return (
    <View f={1} px={24} pt={24} bg={colors.primary700}>
      <ExpensesSummary period={period} expenses={expenses} />
      {expenses.length === 0 ? (
        <Text color={'#ffffff'} fos={16} textAlign='center' mt={32}>
          {fallbackText}
        </Text>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  )
}

export default ExpensesOutput
