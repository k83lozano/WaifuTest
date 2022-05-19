import React from 'react'
import {View, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Card = ({children, style}) => {
  return (
    <View style={[styles.card,style]}>{children}</View>
  )
}

const styles=StyleSheet.create({
    card:{
        width:300,
        margin:10,
        width:'100%',
        backgroundColor: colors.tertiary,
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center'
    }
})

export default Card