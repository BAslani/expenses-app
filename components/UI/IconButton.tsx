import { View, Text, Button } from 'tamagui'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  size: number
  color?: string
  icon: keyof typeof Ionicons.glyphMap
  onPress: () => void
}

const IconButton = ({ icon, size, color, onPress }: Props) => {
  return (
    <Button unstyled onPress={onPress} pressStyle={{ opacity: 0.75 }}>
      <View br={24} p={6} mx={8} my={2}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Button>
  )
}

export default IconButton
