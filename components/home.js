import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { InventoryContext } from '../InventoryContext';

export default function HomeScreen({ navigation }) {
  const { addItem } = useContext(InventoryContext);

  return (
    <View>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddItem')}
      />
      <Button
        title="View Inventory"
        onPress={() => navigation.navigate('Inventory')}
      />
    </View>
  );
}
