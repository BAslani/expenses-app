import { StackScreenProps } from '@react-navigation/stack'
import { colors } from 'assets/colors'
import { CustomButton } from 'components/UI/CustomButton'
import IconButton from 'components/UI/IconButton'
import ExpenseForm from 'components/form/ExpenseForm'
import { RootStackParamList } from 'navigation'
import React, { FC, useContext, useLayoutEffect } from 'react'
import { ExpensesContext } from 'store/expensesContext'
import { Input, View } from 'tamagui'

type Props = StackScreenProps<RootStackParamList, 'ManageExpense'>

const ManageExpense: FC<Props> = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    if (editExpenseId) {
      deleteExpense(editExpenseId)
    }
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confitmHandler = () => {
    if (editExpenseId) {
      updateExpense({
        title: 'ssd',
        amount: 30,
        date: new Date('2024-05-23'),
        id: editExpenseId,
      })
    } else {
      addExpense({ title: 'mobile', amount: 300, date: new Date('2024-04-13') })
    }
    navigation.goBack()
  }

  return (
    <View f={1} p={24} bg={colors.primary800} gap={24}>
      <ExpenseForm />
      <View fd={'row'} jc={'center'} ai={'center'} gap={16}>
        <CustomButton type='outlined' onPress={cancelHandler} minWidth={120}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confitmHandler} minWidth={120}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
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
