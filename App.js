import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import List from './screens/List';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator mode="modal" headerMode="float">
        <Stack.Screen
          options={{ headerShown: false }}
          name="@expo/vector-icons directory"
          component={List}
          options={{
            headerStyle: {
              backgroundColor: '#4332e2',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: '#4332e2',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
