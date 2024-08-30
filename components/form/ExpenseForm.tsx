import { View, Text, Button } from 'tamagui'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import { CustomButton } from 'components/UI/CustomButton'

import { Expense } from 'components/expenses/ExpenseItem'
import { Alert, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { colors } from 'assets/colors'

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
    date: defaultValues ? new Date(defaultValues.date) : new Date(),
    title: defaultValues ? defaultValues.title.toString() : '',
  })

  const [showDatePicker, setShowDatePicker] = useState(false)

  const inputChangeHandler = (identifier: string, enteredValue: string) => {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [identifier]: enteredValue,
      }
    })
  }

  const dateChangeHandler = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false)
    if (selectedDate) {
      setInputValues((currentValues) => ({
        ...currentValues,
        date: selectedDate,
      }))
    }
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      title: inputValues.title,
    }
    const amountValidation =
      !isNaN(expenseData.amount) && expenseData.amount > 0

    const dateValidation = expenseData.date.toString() !== 'Invalid Date'

    const titleValidation = expenseData.title.trim().length > 0
    if (!amountValidation || !dateValidation || !titleValidation) {
      Alert.alert('Invalid input', 'Please check your input values!')
      return
    }
    onSubmit(expenseData)
  }

  return (
    <View mt={40} gap={16}>
      <Text fos={24} fow={'bold'} color={'#ffffff'} textAlign='center' mb={8}>
        Your Expense
      </Text>
      <View fd={'row'} jc={'space-between'} gap={12}>
        <CustomInput
          label='Amount'
          inputConfig={{
            value: inputValues.amount,
            keyboardType: 'decimal-pad',
            onChangeText: (value) => inputChangeHandler('amount', value),
          }}
        />
        <View gap={4} f={1}>
          <Text fos={12} color={colors.primary500}>
            Date
          </Text>
          <Button
            unstyled
            br={8}
            p={8}
            bg={colors.primary100}
            onPress={() => setShowDatePicker(true)}
          >
            {inputValues.date.toISOString().slice(0, 10)}
          </Button>
          {showDatePicker && (
            <DateTimePicker
              value={inputValues.date}
              mode='date'
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              onChange={dateChangeHandler}
            />
          )}
        </View>
      </View>
      <CustomInput
        label='Description'
        bgGray
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
