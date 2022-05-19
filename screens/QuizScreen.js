import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { View } from "react-native-web";
import QuestionContainer from "../components/QuestionContainer";


const Question = ({ item, onPress, backgroundColor, textColor, list }) => (
  <QuestionContainer onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.question}</Text>
    {list}
  </QuestionContainer>
);

const QuizScreen = (props) => {
  const { 
    data
  } = props;
    
  const [selectedItems, setSelectedItems] = useState([]);
  
  const renderItem = ({ item }) => {
    const listItems = item.answers.map((elem) =>
      <TouchableOpacity style={styles.ansButton} key={elem.key}><Button title={elem.answer} color='#cb42f5'/></TouchableOpacity>
    );
    
    const backgroundColor = item.key === selectedItems ? "#6e3b6e" : "#f9c2ff";
    const color = item.key === selectedItems ? 'white' : 'black';

    return (
      <Question
        item={item}
        onPress={() => setSelectedItems(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        list={listItems}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        extraData={selectedItems}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    alignSelf:'center',
    alignContent:'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    
    fontSize: 32,
  },
  ansButton: {
    margin:10,
    width:'90%'
  }
});


export default QuizScreen