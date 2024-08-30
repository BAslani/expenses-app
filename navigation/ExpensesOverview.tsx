import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'

import RecentExpenses from 'screens/RecentExpenses'
import AllExpenses from 'screens/AllExpenses'
import { RootStackParamList } from '.'
import { Ionicons } from '@expo/vector-icons'
import IconButton from 'components/UI/IconButton'
import { NavigationProp } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

type Props = StackScreenProps<RootStackParamList, 'ExpensesOverview'>

export default function ExpensecOverview({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={({
        navigation,
      }: {
        navigation: NavigationProp<RootStackParamList>
      }) => ({
        headerStyle: {
          backgroundColor: '#cccccc',
        },
        headerTintColor: '#4d4d4d',
        tabBarStyle: {
          backgroundColor: '#cccccc',
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#f7bc0c',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense', {})
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All expenses',
          tabBarLabel: 'All expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
