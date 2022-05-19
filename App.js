import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import StartQuizScreen from './screens/StartQuizScreen';
import colors from './constants/colors';
import Header from './Components/Header';

export default function App() {

  const [startGame, setStartGame]=useState(0)


  let content = <StartQuizScreen onStartGame={setStartGame}></StartQuizScreen>
  if(startGame === 1) 
  { 
    content = <QuizScreen></QuizScreen>
  }

  return (
    <View style={styles.container}>
      <Header title={"Waifu Test"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
