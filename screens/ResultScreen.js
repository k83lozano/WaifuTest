import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { deserialise } from 'kitsu-core'

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
      <Image
        style={styles.tinyImg}
        source={{uri: charURI, }}
      />
      <Text>{charName}</Text>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  tinyImg: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
})