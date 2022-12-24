import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Onboarding from './Components/Onboarding';
import Login from './Components/Login';
import Register from './Components/Register';
import HomeScreen from './Components/HomeScreen';
import CategoryProduct from './Components/CategoryProduct';
import Category from './Components/Category';
import Cart from './Components/Cart';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Stack.Screen name="Account" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Category" component={Category} options={{headerShown: false}} />
      <Stack.Screen name="CategoryProduct" component={CategoryProduct} options={{headerShown: false}} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
