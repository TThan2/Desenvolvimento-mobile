import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

export default function Form() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Abc</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    color: '#fff',
    borderRadius: 20,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});
