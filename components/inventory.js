import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InventoryContext } from '../Inventory';
import SearchBar from './searchBar';
import { css } from './css';
import AddItemScreen from './addItem';
import ViewItem from './viewItem'

export default function InventoryScreen({navigation}) {
  const { inventory, deleteItem } = useContext(InventoryContext);

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleSearch = () => {
    let filterItems = inventory.filter((item) =>{
      item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.upc.toLowerCase().includes(searchItem.toLowerCase())
    })
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={css.itemContainer}
      onPress={() => navigation.navigate('View Item', { item })}
      >
    <View style={css.itemInfoContainer}>
    {item.image && <Image source={{ uri: item.image }} style={css.itemImage} />}
      <View style={css.itemDetails}>
        <Text style={css.itemName}>{item.name}</Text>
        <Text style={css.itemUPC}>UPC: {item.upc}</Text>
        <Text style={css.itemQty}>Qty: {item.qty}</Text>
      </View>
    </View>
      <TouchableOpacity
        onPress={() => handleDeleteItem(item.id)}
      >
        <MaterialCommunityIcons name="delete-off" size={20} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView  style={css.container}>
      <SearchBar style={css.container} />
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <AddItemScreen/>
    </SafeAreaView>
  );

}
