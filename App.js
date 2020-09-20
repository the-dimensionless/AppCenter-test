import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import withCodePush from './codepush';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CodePush Demo !</Text>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.  It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Text>
        <Text />
        <Text style={styles.bottomContent}>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title='Click Me' onPress={() => Alert.alert('DevOps is exhausting!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: "bold"
  },
  paragraph: {
    padding: 16,
    fontStyle: "italic",
    fontSize: 21
  },
  content: {
    alignItems: "center",

  },
  btnContainer: {
    padding: 15,
    width: '70%',
    borderRadius: 10
  },
  bottomContent: {
    margin: 15
  }
});

export default withCodePush(App);
