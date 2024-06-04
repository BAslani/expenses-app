import { View, Text } from 'tamagui'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import { CustomButton } from 'components/UI/CustomButton'

import { Expense } from 'components/expenses/ExpenseItem'

type Props = {
  isEditing: boolean
  cancelHandler: () => void
  onSubmit: (expense: Omit<Expense, 'id'>) => void
  defaultValues: Expense | undefined
}

const ExpenseForm = ({
  isEditing,
  cancelHandler,
  onSubmit,
  defaultValues,
}: Props) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
    title: defaultValues ? defaultValues.title.toString() : '',
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
