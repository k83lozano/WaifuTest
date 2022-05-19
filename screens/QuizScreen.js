import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    question: "¿A qué lugar ficticio te gustaría ir?",
    id: 1,
    answers: [
      {
          answer: "La Fábrica de Willy Wonka"
      },
      {
          answer: "Fondo de Bikini"
      },
      {
          answer: "La Tierra Media"
      },
      {
          answer: "Tlaxcala"
      }
    ]            
  },
  {
    question: "Si pudieras invitarle unos tacos a un personaje famoso, a quién sería?",
    id: 2,
    answers: [
      {
          answer: "Zendaya"
      },
      {
          answer: "Genghis Khan"
      },
      {
          answer: "Chabelo"
      },
      {
          answer: "Elvis Presley"
      }
    ]           
  },
  {
    question: "Mole favorito",
    id: 3,
    answers: [
      {
          answer: "Poblano"
      },
      {
          answer: "Negro"
      },
      {
          answer: "Amarillo"
      },
      {
          answer: "Xico"
      }
    ]            
  },
  {
    question: "¿Cuando vas por un elote o esquite eliges, chile del que pica o del que no pica?",
    id: 4,
    answers: [
      {
          answer: "Del que pica"
      },
      {
          answer: "Del que no pica"
      },
      {
          answer: ""
      },
      {
          answer: ""
      }
    ]            
  },
  {
    question: "Canción favorita para llorar",
    id: 5,
    answers: [
      {
          answer: "Nobody -Mitski"
      },
      {
          answer: "Fuentes de Ortiz - Ed Maverick"
      },
      {
          answer: "Fix You - Coldplay"
      },
      {
          answer: "No lloro"
      }
    ]            
  },
  {
    question: "¿En qué momento del día te bañas?",
    id: 6,
    answers: [
      {
          answer: "En la mañana"
      },
      {
          answer: "En la tarde"
      },
      {
          answer: "En la noche"
      },
      {
          answer: "¿Bañarme?"
      }
    ]            
  },
  {
    question: "¿Qué nombre es más “fresa”?",
    id: 7,
    answers: [
      {
          answer: "Santi"
      },
      {
          answer: "Juanpa"
      },
      {
          answer: "Ana Pao"
      },
      {
          answer: "Ana Sof"
      }
    ]            
  }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.question}</Text>
  </TouchableOpacity>
);

const QuizScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
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