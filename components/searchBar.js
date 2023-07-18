import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { InventoryContext } from '../InventoryContext';
import { css } from './css';

export default function SearchBar({ navigation }) {
  const [itemName, setItemName] = useState('');

  return (
    <View>
      <TextInput
      style={css.input}
        placeholder="Search Your Inventory..."
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <Button title="Search"/>
    </View>

  );
}
