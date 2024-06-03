import { colors } from 'assets/colors'
import { styled, Button } from 'tamagui'

export const CustomButton = styled(Button, {
  br: 4,
  p: 8,
  bg: colors.primary500,
  color: colors.primary50,
  ai: 'center',
  animation: 'quick',
  pressStyle: {
    opacity: 0.75,
    bg: colors.primary200,
    br: 4,
  },
  variants: {
    type: {
      outlined: {
        bg: '$colorTransparent',
        color: colors.primary50,
      },
    },
  },
})
