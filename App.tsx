import 'react-native-gesture-handler'
import 'react-native-url-polyfill/auto'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'

import RootStack from './navigation'
import config from './tamagui.config'
import { StatusBar } from 'expo-status-bar'
import ExpensesContextProvider from 'store/expensesContext'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <RootStack />
      </ExpensesContextProvider>
    </TamaguiProvider>
  )
}
