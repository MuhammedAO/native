import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function App() {
  const [students, setStudents] = useState([
    { name: 'student-1', key: '1' },
    { name: 'student-2', key: '2' },
    { name: 'student-3', key: '3' },
    { name: 'student-4', key: '4' },
    { name: 'student-5', key: '5' },
    { name: 'student-6', key: '6' },
    { name: 'student-7', key: '7' },
    { name: 'student-8', key: '8' },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          students.map(student => (
            <View key={student.key}>
              <Text style={styles.item}>{student.name}</Text>
            </View>
          ))
        }
      </ScrollView>
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
    backgroundColor: 'tomato',
    fontSize: 24,
  },
})