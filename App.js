import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import StartQuizScreen from './screens/StartQuizScreen';
import colors from './constants/colors';
import Header from './Components/Header';

export default function App() {

  let content = <StartQuizScreen></StartQuizScreen>

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
