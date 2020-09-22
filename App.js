// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
        <Text style={styles.boldText}>Hello World</Text>
        <Text style={styles.boldText}>Hello World</Text>
        <Text style={styles.boldText}>Hello World</Text>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  }
})
