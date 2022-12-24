import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Register from './Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from './Cart';
import Account from './Account';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { height: 60, paddingBottom: 10, },

        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginTop: -10,
        },

        headerTintColor: "#ffffff",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#407bff',
            height: 0,
        },                    
    }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen}  options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={24} />
                        ),
                        headerTitle: 'Home',
                    }}                  />
        <Tab.Screen name="Cart" component={Cart} options={{
                        tabBarLabel: 'cart',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="shopping-cart" color={color} size={24} />
                        ),
                        headerTitle: 'cart',
                    }}   /> 

<Tab.Screen name="Account" component={Account} options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={24} />
                        ),
                        headerTitle: 'Account',
                    }}   />

      </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})