import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flex = (props) => {
 return (
  <View style={[
        styles.container,
      {
          flexDirection: 'column'
      },
  ]
  }>
    <View style={{flex: 1, backgroundColor: 'red'}}/>
    <View style={{flex: 2, backgroundColor: 'yellow'}}/>
    <View style={{flex: 3, backgroundColor: 'green'}}/>
  </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    }
});
export default Flex;