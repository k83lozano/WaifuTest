import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    padding: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyCOntent: 'center'
  },
  headerTitle: {
    color: colors.background,
    fontSize: 30
  }
});

export default Header