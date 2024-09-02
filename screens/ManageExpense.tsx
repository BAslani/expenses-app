import { StackScreenProps } from '@react-navigation/stack'
import { colors } from 'assets/colors'
import IconButton from 'components/UI/IconButton'
import { Expense } from 'components/expenses/ExpenseItem'
import ExpenseForm from 'components/form/ExpenseForm'
import { RootStackParamList } from 'navigation'
import React, { FC, useContext, useLayoutEffect } from 'react'
import {
  createExpense,
  deleteExpenseServer,
  updateExpenseServer,
} from 'services/crud'
import { ExpensesContext } from 'store/expensesContext'
import { View } from 'tamagui'

type Props = StackScreenProps<RootStackParamList, 'ManageExpense'>

const ManageExpense: FC<Props> = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId
  const { addExpense, deleteExpense, updateExpense, expenses } =
    useContext(ExpensesContext)
  const selectedExpense = expenses.find(
    (expense) => expense.id === editExpenseId
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    if (editExpenseId) {
      deleteExpense(editExpenseId)
      deleteExpenseServer(editExpenseId)
    }
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmHandler = (expenseData: Omit<Expense, 'id'>) => {
    if (editExpenseId) {
      updateExpense({ ...expenseData, id: editExpenseId })
      updateExpenseServer({ ...expenseData, id: editExpenseId })
    } else {
      addExpense(expenseData)
      createExpense(expenseData)
    }
    navigation.goBack()
  }

  return (
    <View f={1} p={24} bg={colors.primary700}>
      <ExpenseForm
        onSubmit={confirmHandler}
        isEditing={isEditing}
        cancelHandler={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View mt={16} pt={8} btw={2} btc={colors.primary200} ai={'center'}>
          <IconButton
            icon='trash'
            color={colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense
