import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import withCodePush from './codepush';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test For Codepush !</Text>
      <Button title='Click Me' onPress={() => Alert.alert('Simply Codepush Works!')} />
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
  text: {
    fontSize: 24,
  }
});

export default withCodePush(App);
