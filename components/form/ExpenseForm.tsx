import { View, Text } from 'tamagui'
import React, { useState } from 'react'
import CustomInput from './CustomInput'

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  })
  const inputChangeHandler = (identifier: string, enteredValue: string) => {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [identifier]: enteredValue,
      }
    })
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
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: (value) => inputChangeHandler('date', value),
          }}
        />
      </View>
      <CustomInput label='Description' inputConfig={{ multiline: true }} />
    </View>
  )
}

export default ExpenseForm
