import React from 'react'
import { StyleSheet,  Text, View} from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Waifu Test</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: 70,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
  },
  headerTitle: {
      color: 'white',
      fontSize: 35,
  }
});
export default Header