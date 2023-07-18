import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { InventoryContext } from '../InventoryContext';

export default function AddItemScreen({ navigation }) {
  const { addItem } = useContext(InventoryContext);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim()) {
      addItem(itemName);
      Alert.alert('YAY MORE STUFFS!!!', 'Item added to inventory');
      setItemName('');
    } else {
      Alert.alert('Uh-oh!', 'Please enter an item name');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <Button title="Add" onPress={handleAddItem} />
    </View>
  );
}
