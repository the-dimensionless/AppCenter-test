import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import CodePush from 'react-native-code-push';

export default function App() {
  useEffect = () => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE
    }), []
  }
  return (
    <View style={styles.container}>
      <Text>Hi There!</Text>
      <Button title='Click Me' onPress={() => Alert.alert('Howdy Partner!')} />
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
