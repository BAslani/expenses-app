import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ManageExpense from 'screens/ManageExpense'
import ExpensecOverview from './ExpensesOverview'
import { colors } from 'assets/colors'

export type RootStackParamList = {
  ManageExpense: {
    expenseId?: string
  }
  ExpensesOverview: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary500 },
          headerTintColor: '#ffffff',
        }}
      >
        <Stack.Screen
          name='ExpensesOverview'
          component={ExpensecOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ManageExpense'
          component={ManageExpense}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
