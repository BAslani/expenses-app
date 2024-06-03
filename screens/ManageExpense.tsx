import { StackScreenProps } from '@react-navigation/stack'
import { colors } from 'assets/colors'
import { CustomButton } from 'components/UI/CustomButton'
import IconButton from 'components/UI/IconButton'
import { RootStackParamList } from 'navigation'
import React, { FC, useLayoutEffect } from 'react'
import { View } from 'tamagui'

type Props = StackScreenProps<RootStackParamList, 'ManageExpense'>

const ManageExpense: FC<Props> = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confitmHandler = () => {
    navigation.goBack()
  }

  return (
    <View f={1} p={24} bg={colors.primary800}>
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
