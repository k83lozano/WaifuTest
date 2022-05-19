import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Question = ({ item, onPress, backgroundColor, textColor }) => (
  // TODO
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.question}</Text>
  </TouchableOpacity>
);

const QuizScreen = (props) => {
  const { 
    data
   } = props;
  
  const [selectedItems, setSelectedItems] = useState([]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedItems ? "#6e3b6e" : "#f9c2ff";
    const color = item.key === selectedItems ? 'white' : 'black';

    return (
      <Question
        item={item}
        onPress={() => setSelectedItems(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default QuizScreen