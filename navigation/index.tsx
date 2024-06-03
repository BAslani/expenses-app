import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ManageExpense from 'screens/ManageExpense'
import ExpensecOverview from './ExpensesOverview'

export type RootStackParamList = {
  ManageExpense: undefined
  ExpensesOverview: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ExpensesOverview'
          component={ExpensecOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='ManageExpense' component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
