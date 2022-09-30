import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { classHelpers } from './helpers'

const ClassScreen = () => {
  const { Robot, FlyingRobot } = classHelpers
  const robot = new Robot('John')
  const newRobot = new FlyingRobot('Jim', 2)
  robot.consoleName()
  robot.move(20)
  newRobot.move(10)
  return (
    <View>
      <Text style={styles.H1Bold}>Class  Screen</Text>
      <Text>Creating a Robot Class</Text>
      <Text>{robot.printName()}</Text>
      <Text>{robot.printMove(121)}</Text>
    </View>
  )
}

export { ClassScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})