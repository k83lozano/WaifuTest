import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import StartQuizScreen from './screens/StartQuizScreen';

export default function App() {

  let content = <StartQuizScreen></StartQuizScreen>

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
