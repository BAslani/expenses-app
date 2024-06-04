import { View, Text } from 'tamagui'
import React from 'react'
import CustomInput from './CustomInput'

const ExpenseForm = () => {
  const amountChangeHandler = () => {}
  return (
    <View mt={40} gap={16}>
      <Text fos={24} fow={'bold'} color={'#ffffff'} textAlign='center' mb={8}>
        Your Expense
      </Text>
      <View fd={'row'} jc={'space-between'}>
        <CustomInput
          label='Amount'
          inputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
        />
        <CustomInput
          label='Date'
          inputConfig={{
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <CustomInput label='Description' inputConfig={{ multiline: true }} />
    </View>
  )
}

export default ExpenseForm
