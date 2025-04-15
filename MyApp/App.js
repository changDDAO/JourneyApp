import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Open up App.js to start working on your app!</Text>
      <Text style={styles.red}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue:{
    color:'blue',
    fontWeight: 'bold',
    fontSize : 30
  },
  red :{
    color:'red'
  }
});
