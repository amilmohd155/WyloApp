import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import {PostScreen, HomeScreen, TextScreen, ImageScreen} from './src/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PostStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Post" headerMode="float">
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
}

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      tabBarOptions={{
        showLabel: false,
        style: {backgroundColor: '#DDD', padding: 2},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostStackScreen}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => (
            <Icon
              name="add-circle-outline"
              type="material"
              color="#000"
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
