import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './screens/QuizScreen';
import QuizScreenTest from './screens/QuizScreenTest';
import ResultScreen from './screens/ResultScreen';
import StartQuizScreen from './screens/StartQuizScreen';

export default function App() {

  let content = <StartQuizScreen></StartQuizScreen>
  content = <QuizScreen></QuizScreen>

  var json = require('./QuestionsAnswers.json'); //(with path)
  console.log('json', json)

  const {Questions : {0 :{ question : quest}}} = json

  console.log('quest', quest)

  for (const quest of json.Questions)
      console.log('quest', quest.question);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
