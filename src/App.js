import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform } from 'react-native';

const {height, width} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Todo</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"Enter an item"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0061fe',
    alignItems: 'center'  
  },
  title: {
    fontSize: 35,
    marginTop: 50,
    fontWeight: 400,
    marginBottom: 25,
    color: "#fff"
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      },
      web: {
        boxShadow: "0px 0px 0px 1px"
      }
    })
  }
});
