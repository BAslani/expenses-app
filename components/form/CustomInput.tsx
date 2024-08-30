import { View, Text, Input, InputProps } from 'tamagui'
import React from 'react'
import { colors } from 'assets/colors'

type Props = {
  label: string
  inputConfig: InputProps
  bgGray?: boolean
}

const CustomInput = ({ label, inputConfig, bgGray }: Props) => {
  return (
    <View f={!inputConfig.multiline ? 1 : 0} marginHorizontal={4} gap={4}>
      <Text fos={12} color={colors.primary500}>
        {label}
      </Text>
      <Input
        unstyled
        {...inputConfig}
        bg={bgGray ? colors.primary500 : colors.primary100}
        p={6}
        br={8}
        fos={18}
        color={colors.primary700}
        minHeight={inputConfig.multiline ? 100 : ''}
        textAlignVertical='top'
      />
    </View>
  )
}

export default CustomInput
