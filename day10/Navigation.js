import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FavoriteScreen from './FavouriteScreen';
import GettingStartedScreen from './GettingStartedScreen';
import SignUpScreen from './SignUpScreen';
import Login from './LoginScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const [username,setUsername]=useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="GettingStartedScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },
      }}
    >
       <Stack.Screen
        name="Getting Start"
        component={GettingStartedScreen}
        options={{
          title: 'Shop app',
        }}
      />
      <Stack.Screen
        name="Sign"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Product"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: 'My Wishlist',
        }}
      />
    </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;