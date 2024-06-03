import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'

import RecentExpenses from 'screens/RecentExpenses'
import AllExpenses from 'screens/AllExpenses'
import { RootStackParamList } from '.'
import { Ionicons } from '@expo/vector-icons'
import IconButton from 'components/UI/IconButton'

const Tab = createBottomTabNavigator()

type Props = StackScreenProps<RootStackParamList, 'ExpensesOverview'>

export default function ExpensecOverview({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3e04c3',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#3e04c3',
        },
        tabBarActiveTintColor: '#f7bc0c',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              console.log('tapped')
            }}
          />
        ),
      }}
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
