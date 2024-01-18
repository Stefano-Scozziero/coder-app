import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log(`Iniciando sesión con el usuario: ${username}`);
  };

  return (
    <ImageBackground source={require('./images/fondodefinitivo.png')} style={styles.container}>
      <Image source={require('./images/logo.png')} style={styles.logo} />
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Nombre de usuario"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar sesión" onPress={handleLogin}/>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
    
  }
  
});
