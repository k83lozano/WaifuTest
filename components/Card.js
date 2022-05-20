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
        height: '100%',
        width:'250%',
        padding: 20,
        backgroundColor: colors.tertiary,
        elevation: 5,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Card