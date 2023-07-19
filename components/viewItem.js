import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Button, Text, SafeAreaView, Image, View } from 'react-native';
import { css } from './css';

export default function ViewItem({navigation, route}) {

  console.log('route', route.params.item) 
  const item = route.params.item

  return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>{item.name}</Text>
         <Image source={{uri: item.image}} style={{width:250, height:250}}/>
         <Text style={styles.subTitle}>QTY: {item.qty}</Text>
         <Image source={{uri: `https://barcode.tec-it.com/barcode.ashx?code=Code128&modulewidth=fit&data=${item.upc}`}} style={{width:'50%', height:100}} resizeMode="contain"/>
         <View style={styles.buttonGroup}>
           <Button
           title="+ Add Stock"
           onClick={() => console.log(`Barcode Printed: ${item.upc}`)} />
           <Button title="Print Barcode" onClick={() => console.log(`Barcode Printed: ${item.upc}`)} />
           <Button
           title="- Remove Stock"
           onClick={() => console.log(`Barcode Printed: ${item.upc}`)} />
         </View>
         
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subTitle:{
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonGroup:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15
  },
  button: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 9,
    fontWeight: 'bold',
  },

});
