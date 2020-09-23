import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [name, setName] = useState('lorem')
  const [person, setPerson] = useState({ name: 'ipsum', age: 40 })

  const clickHandler = () => {
    setName('Lorem ipsum dolor')
    setPerson({ name: 'React Native', age: 45 })
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>And i'm madly in love with {person.name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
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
  buttonContainer: {
    marginTop: 20,
  }
})
