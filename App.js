import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function App() {
  const [students, setStudents] = useState([
    { name: 'student-1', id: '1' },
    { name: 'student-2', id: '2' },
    { name: 'student-3', id: '3' },
    { name: 'student-4', id: '4' },
    { name: 'student-5', id: '5' },
    { name: 'student-6', id: '6' },
    { name: 'student-7', id: '7' },
    { name: 'student-8', id: '8' },
  ])

  return (
    <View style={styles.container}>
      {/*
      the data prop specifies the data that we want to output
      when u use a flatlist, if we have numerous items to display,
      all of the items do not automatically load unto the screen when it first renders.
      only the first few loads and more will follow as u scroll
      the flatlist automatically looks for the key property on item which might differ because most data
      come with an id prop
      */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={students}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
})