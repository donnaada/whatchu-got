import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { css } from './css';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function SearchBar({ navigation }) {
  const [searchItem, setSearchItem] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isScannerModalVisible, setIsScannerModalVisible] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setSearchItem(data);
    alert(`Data ${data} has been scanned!`);
    toggleScannerModal();
  };

  const toggleScannerModal = () => {
    setIsScannerModalVisible(!isScannerModalVisible);
  };

  if (hasPermission === null) {
    return <Text>Requesting for access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Access to camera denied</Text>;
  }


  return (
    <View>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={[css.input, { flexGrow: 1 }]}
        placeholder="Search Your Inventory..."
        value={searchItem}
        onChangeText={(text) => {
          setSearchItem(text);
          console.log(searchItem);
        }}
      />

      <TouchableOpacity style={css.button} onPress={toggleScannerModal}>
        <MaterialCommunityIcons name="barcode-scan" size={24} color="white" />
      </TouchableOpacity>
</View>
      <Modal visible={isScannerModalVisible} animationType="slide" transparent>
        <View style={css.modalContainer}>
        <Text style={{color:'white', fontSize:24, marginBottom:10}}>Scan a BarCode</Text>
          <View style={css.modalScanner}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          <TouchableOpacity style={[css.alignRight]} onPress={toggleScannerModal}>
            <AntDesign name="closecircle" size={24} color="white" />
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
