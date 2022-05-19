import React from 'react'
import { useState } from 'react'
import { View, Image, Button, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import Card from '../Components/Card'
import QuizScreen from './QuizScreen'

const StartQuizScreen = ({onStartGame}) => {


  return (
    <View style={styles.screen}>
      <Card>
        <Image
          style={styles.image}
          source={{
            uri: 'http://images7.memedroid.com/images/UPLOADED894/5f0502441774c.jpeg',
          }}
        />
        <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Empezar"
              onPress={() => (onStartGame(1))}
              color={colors.secondary}
            />
        </View>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D6CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#E8D6CB'
  },
  button: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    alignSelf: 'center'
  }
});

export default StartQuizScreen