import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const App = () => {
  const [count, setCount] = useState(0)
  {/*in react, whenever our next value of state depends on the prevState, 
  it's safer to pass a fn which returns the new state
 */}
  const onPressIncrease = () => setCount(prevCount => prevCount + 1)
  const onPressDecrease = () => setCount(prevCount => prevCount - 1)

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressIncrease}
      >
        <Text>Count up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={onPressDecrease}
      >
        <Text>Count Down</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  btn: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
})

export default App