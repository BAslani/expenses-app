import { View, Text } from 'tamagui'
import React, { useContext, useState } from 'react'
import CustomInput from './CustomInput'
import { CustomButton } from 'components/UI/CustomButton'
import { ExpensesContext } from 'store/expensesContext'
import { Expense } from 'components/expenses/ExpenseItem'

type Props = {
  isEditing: boolean
  cancelHandler: () => void
  onSubmit: (expense: Omit<Expense, 'id'>) => void
  expenseId?: string
}

const ExpenseForm = ({
  isEditing,
  cancelHandler,
  expenseId,
  onSubmit,
}: Props) => {
  const { addExpense, updateExpense } = useContext(ExpensesContext)
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    title: '',
  })

  const inputChangeHandler = (identifier: string, enteredValue: string) => {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [identifier]: enteredValue,
      }
    })
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      title: inputValues.title,
    }

    onSubmit(expenseData)
  }

  return (
    <View mt={40} gap={16}>
      <Text fos={24} fow={'bold'} color={'#ffffff'} textAlign='center' mb={8}>
        Your Expense
      </Text>
      <View fd={'row'} jc={'space-between'}>
        <CustomInput
          label='Amount'
          inputConfig={{
            value: inputValues.amount,
            keyboardType: 'decimal-pad',
            onChangeText: (value) => inputChangeHandler('amount', value),
          }}
        />
        <CustomInput
          label='Date'
          inputConfig={{
            value: inputValues.date,
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: (value) => inputChangeHandler('date', value),
          }}
        />
      </View>
      <CustomInput
        label='Description'
        inputConfig={{
          multiline: true,
          value: inputValues.title,
          onChangeText: (value) => inputChangeHandler('title', value),
        }}
      />
      <View fd={'row'} jc={'center'} ai={'center'} gap={16}>
        <CustomButton type='outlined' onPress={cancelHandler} minWidth={120}>
          Cancel
        </CustomButton>
        <CustomButton onPress={submitHandler} minWidth={120}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
    </View>
  )
}

export default ExpenseForm
