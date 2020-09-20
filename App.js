import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import withCodePush from './codepush';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Terrible !</Text>
      <View>
        <Button title='Click Me' onPress={() => Alert.alert('DevOps is exhausting!')} />
      </View>
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
    fontSize: 24
  }
});

export default withCodePush(App);
