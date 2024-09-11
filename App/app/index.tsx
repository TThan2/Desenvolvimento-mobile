import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View style={styles.view}>
    <View style={styles.title}>
      <Text style={[styles.text, styles.title_text]}>Bem-vindo!</Text>
    </View>
      <View style={styles.formContainer}>
        <Text style={[styles.text, styles.paragraph]}>Entre na sua conta para acessar a plataforma.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
        <View style={styles.barContainer}>
          <View style={styles.bar} />
          <Text style={styles.barText}>Ou</Text>
          <View style={styles.bar} />
        </View>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 15,
    margin: 5,
    backgroundColor: "#1f1f1f",
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    fontSize: 22,
  },
  view: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  title:{
    paddingBottom: 0,
  },
  title_text: {
    fontSize: 46,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 28,
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,  
  },
  bar: {
    height: 3,
    backgroundColor: "#444",
    flex: 1,
  },
  barText: {
    color: '#aaa',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#6d6d6d',
    fontSize: 24,
    textDecorationLine: "underline",
  },
});
