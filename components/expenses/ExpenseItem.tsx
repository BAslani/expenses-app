import { View, Text, Button } from 'tamagui'
import React from 'react'
import { colors } from 'assets/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'navigation'

export type Expense = {
  id: string
  title: string
  amount: number
  date: Date
}

const ExpenseItem = ({ id, title, amount, date }: Expense) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', { expenseId: id })
  }

  return (
    <Button
      elevate
      elevation={3}
      unstyled
      onPress={expensePressHandler}
      animation={'quick'}
      pressStyle={{ opacity: 0.75, scale: 0.98 }}
    >
      <View
        fd={'row'}
        jc={'space-between'}
        br={6}
        p={12}
        marginVertical={8}
        bg={colors.primary500}
        shadowColor={colors.gray500}
        shadowRadius={4}
        shadowOffset={{ width: 1, height: 1 }}
        shadowOpacity={0.4}
      >
        <View>
          <Text color={colors.primary700} fos={16} mb={4} fow={'bold'}>
            {title}
          </Text>
          <Text color={colors.primary50}>{date.toDateString()}</Text>
        </View>
        <View
          miw={80}
          px={12}
          py={4}
          bg={'white'}
          jc={'center'}
          ai={'center'}
          br={4}
        >
          <Text color={colors.primary100}>$ {amount.toFixed(2)}</Text>
        </View>
      </View>
    </Button>
  )
}

export default ExpenseItem
