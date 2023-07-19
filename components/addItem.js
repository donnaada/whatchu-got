import React, { useState, useContext, useEffect } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { css } from './css';
import { InventoryContext } from '../Inventory';


export default function AddItemScreen({ navigation }) {
  const { addItem } = useContext(InventoryContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState('');
  const [qty, setQty] = useState(0);
  const [upc, setUpc] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setUpc(data);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    resetForm();
  };

  const resetForm = () => {
    setItemName('');
    setImage(null);
    setQty(0);
    setUpc('');
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddItem = () => {
    if (itemName.trim()) {
      addItem(itemName, qty, upc, image);
      Alert.alert('YAY MORE STUFFS!!!', 'Item added to inventory');
      resetForm();
      toggleModal();
    } else {
      Alert.alert('Uh-oh!', 'Please enter an item name');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Access to camera denied</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.floatingButton} onPress={toggleModal}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide" transparent>
          <ScrollView
            contentContainerStyle={styles.modalScrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
              <Text style={{fontWeight:600, fontSize: 18}}>Add Item to Inventory</Text>
                <View style={styles.imagePicker}>
                  {!image ? (
                    <TouchableOpacity onPress={selectImage}>
                      <Ionicons name="images-outline" size={24} color="white" />
                    </TouchableOpacity>
                  ) : (
                    <Image source={{ uri: image }} style={{ width: 125, height: 125 }} />
                  )}
                </View>
                <TextInput
                  style={[styles.input, { width: '100%' }]}
                  placeholder="Item Name... "
                  placeholderTextColor="#7d7d7d"
                  value={itemName}
                  onChangeText={(text) => setItemName(text)}
                />
                <TextInput
                  style={[styles.input, { width: '100%' }]}
                  placeholder="Quantity... "
                  placeholderTextColor="#7d7d7d"
                  value={qty}
                  keyboardType="number-pad"
                  onChangeText={(num) => setQty(num)}
                />

                <Text style={{marginBottom:10}}>Enter UPC or Scan Below</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="UPC"
                    placeholderTextColor="#7d7d7d"
                    value={upc}
                    onChangeText={(text) => setUpc(text)}
                  />
                 {/* Barcode Scanner */}
                    <BarCodeScanner
                      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                      style={{width: '100%', height: 50}}
                    />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.modalAddButton} onPress={handleAddItem}>
                    <Text style={styles.modalAddButtonText}>+Add Item</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
                    <Text style={styles.modalCloseButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>



            </View>
          </ScrollView>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  barcodeScannerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    height: 50, // adjust the height as needed
  },
  barcodeScanner: {
    ...StyleSheet.absoluteFillObject,
  },
  rescanButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#0E4C92',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  modalScrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    width: '75%',
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  modalCloseButton: {
    marginTop: 16,
    marginLeft: 5,
    padding: 8,
    backgroundColor: '#555',
    borderRadius: 4,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalAddButton: {
    marginTop: 16,
    marginRight: 5,
    padding: 8,
    backgroundColor: '#008000',
    borderRadius: 4,
  },
  modalAddButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imagePicker: {
    height: 130,
    width: 130,
    margin: 10,
    backgroundColor: '#d3d3d3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
