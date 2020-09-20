import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import withCodePush from './codepush';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Final inte test !</Text>
      <Button title='Click Me' onPress={() => Alert.alert('DevOps is exhausting!')} />
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
});

export default withCodePush(App);
