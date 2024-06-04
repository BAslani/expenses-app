import { View, Text, Input, InputProps } from 'tamagui'
import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { colors } from 'assets/colors'

type Props = {
  label: string
  inputConfig: InputProps
}

const CustomInput = ({ label, inputConfig }: Props) => {
  return (
    <View f={!inputConfig.multiline ? 1 : 0} marginHorizontal={4} gap={4}>
      <Text fos={12} color={colors.primary100}>
        {label}
      </Text>
      <Input
        unstyled
        {...inputConfig}
        bg={colors.primary100}
        p={6}
        br={6}
        fos={18}
        color={colors.primary700}
        minHeight={inputConfig.multiline ? 100 : ''}
        textAlignVertical='top'
      />
    </View>
  )
}

export default CustomInput
