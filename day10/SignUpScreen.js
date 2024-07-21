

// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const backgroundImageUrl = 'https://www.w3schools.com/css/img_mountains.jpg';  

const SignUpScreen = ({ navigation, setUsername, setPassword}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [email, setMail] = useState('');

  const handleSignUp = () => {
    setUser(user);
    setPass(pass);
    setMail(email)
    navigation.navigate('Login');
  };

  return (
    
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
    
   
    <Ionicons name="home" size={32} color="black" />
      <Text style={{fontSize:20}}>SIGN UP TO THE PAGE</Text>
      <View style={styles.container}>
        <Text>USERNAME</Text>
        <TextInput
          placeholder="Enter Username"
          value={user}
          onChangeText={setUser}
          style={styles.input}
        />
        <Text>EMAIL ID</Text>
        <TextInput
          placeholder=" Enter mail id"
          value={email}
          onChangeText={setMail}
          style={styles.input}
          />
        <Text>PASSWORD</Text>
        <TextInput
          placeholder=" Enter password"
          value={pass}
          onChangeText={setPass}
          style={styles.input}
        />
        <TouchableOpacity>
        <Button title="Sign in" color='darkcyan' onPress={handleSignUp} />
        
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    textDecorationStyle:'dotted',
  },
});

export default SignUpScreen;