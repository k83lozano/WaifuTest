import React from 'react'
import { useState } from 'react'
import { View, Image, Button, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import Card from '../components/Card'
import QuizScreen from './QuizScreen'

const StartQuizScreen = ({onStartGame}) => {


  return (
    <View style={styles.screen}>
      <Card>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i1.wp.com/www.senpai.com.mx/wp-content/uploads/2021/06/Las-waifus-de-Fairy-Tail-Nanatsu-no-Taizai-Kanojo-Okarishimasu-y-mas-se-unen-en-un-solo-juego-para-smartphones.jpg?fit=1280%2C720&ssl=1',
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
    width: 400,
    height: 300,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    alignSelf: 'center'
  }
});

export default StartQuizScreen