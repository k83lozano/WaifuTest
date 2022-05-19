import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Button } from "react-native";

const QuestionContainer = (props) => {
  const [question, setQuestion]=useState({ques:'', ans1:'', ans2:'', ans3:'', ans4:''})

  useEffect(()=>{
    if (props.children !=0){
      setQuestion()
    }
  }, [props.children])

  setQuestion=async()=>{
    const[ques, ans1, ans2, ans3, ans4]=await fetchQuestion(props.children)
    setQuestion({ques: ques, ans1: ans1, ans2: ans2, ans3: ans3, ans4: ans4})
  }

  return <View style={styles.questionContainer}>
    <Text style={styles.question}>{props.ques}</Text>
    <Button style={styles.answer} title={props.ans1}/>
    <Button style={styles.answer} title={props.ans2}/>
    <Button style={styles.answer} title={props.ans3}/>
    <Button style={styles.answer} title={props.ans3}/>
  </View>
}

const styles = StyleSheet.create({
    questionContainer: {
        width: 300,
        margin: 10,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 5, //Only Android
        padding: 20,
        borderRadius: 10
    },question:{
      maxWidth: '80%',
      alignItems: 'center',
    },answer:{
      width:'80%'
    }
})

export default QuestionContainer;