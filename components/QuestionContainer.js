import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Button } from "react-native";

const QuestionContainer = ({children, style}) => {
  return <View style={[styles.questionContainer, style]}>
    {children}
  </View>
}

const styles = StyleSheet.create({
    questionContainer: {
        width: '60%',
        padding: 10,
        margin: 10,
        maxWidth: '80%',
        alignItems: 'center',
        alignSelf:'center',
    alignContent:'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 5, //Only Android
        padding: 20,
        borderRadius: 10
    }
})

export default QuestionContainer;