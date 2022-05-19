import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Button } from "react-native";

const QuestionContainer = ({children}) => {
  return <View style={styles.questionContainer}>
    {children}
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