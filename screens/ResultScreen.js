import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { deserialise } from 'kitsu-core'
import colors from '../constants/colors';
import QuestionContainer from '../components/QuestionContainer';

const ResultScreen = (props) => {
  const { 
    selectedAnswers 
  } = props;
  const [animeData, setAnimeData] = useState(undefined);
  const [charName, setCharName] = useState("how to rotate text in mspaint");
  const [charURI, setCharURI] = useState(undefined);

  const getAnime = async (id) => {
    const response = await fetch(`https://kitsu.io/api/edge/anime/${id}?include=characters,characters.character`);
    if (response.status == 200)
    {
      const json = await response.json();
      const kitsu = deserialise(json);
      const charData = kitsu.data.characters.data[id].character.data;
      console.log('charData', charData);
      setCharName(charData.name);
      setCharURI(charData.image.original);
    } else {
      var newId = id.toString();
      newId = parseInt(newId.slice(1, 2)) + parseInt(newId.slice(2));
      getAnime(newId);
    }
  }

  useEffect(() => {
    // map answers to characters
    var resultString = "";
    
    selectedAnswers.forEach(element => {
      resultString += element.selectedAnswer;
    });
    const resIdx = parseInt(resultString);
    getAnime(resIdx);
  }, []);
  

  return (
    <View>
      <QuestionContainer>
      <Image
        style={styles.tinyImg}
        source={{uri: charURI, }}
      />
      <Text style={styles.present}>Tu waifu ideal es:</Text>
      <Text style={styles.name}>{charName}</Text>
      </QuestionContainer>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  tinyImg: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  present:{
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
  }
})