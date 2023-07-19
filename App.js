import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import AddItemScreen from './components/addItem';
import InventoryScreen from './components/inventory';
import viewItem from './components/viewItem';
import { InventoryProvider } from './Inventory';
import SplashScreen from './components/splash';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <InventoryProvider>
        <Stack.Navigator initialRouteName="App Home">
          <Stack.Screen name='App Home' component={SplashScreen} />
          <Stack.Screen name='Inventory' component={InventoryScreen} />
          <Stack.Screen name='AddItem' component={AddItemScreen} />
          <Stack.Screen name='View Item' component={viewItem} />
        </Stack.Navigator> 

      </InventoryProvider>
    </NavigationContainer>

  );
}
