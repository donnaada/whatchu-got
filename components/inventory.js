import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { InventoryContext } from '../InventoryContext';
import SearchBar from './searchBar';
import { css } from './css';

export default function InventoryScreen() {
  const { inventory, deleteItem } = useContext(InventoryContext);

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={css.itemContainer}
      onPress={() => console.log('Item details:', item)}
    >
      <Text>{item.name}</Text>
      <TouchableOpacity
        style={css.deleteButton}
        onPress={() => handleDeleteItem(item.id)}
      >
        <Text style={css.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={css.container}>
      <SearchBar style={css.container} />
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

