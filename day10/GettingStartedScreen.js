
import React from 'react';
import { View, Text, Button, ImageBackground, Switch, StyleSheet } from 'react-native';

const backgroundImageUrl = 'https://slidebazaar.com/wp-content/uploads/2022/09/welcome-images-for-ppt.jpg'
const GettingStartedScreen = ({ navigation, isDarkTheme, setIsDarkTheme }) => {
  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <View style={styles.container}>
        <Text style={{fontSize:30,fontWeight:'500', fontFamily:'cursive' }}>Getting Started</Text>
        <Button
          title="Get Started" color='darkcyan'
          onPress={() => navigation.navigate('Sign')}
        />
        <View style={styles.switchContainer}>
          <Text>Switch</Text>
          <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} />
        </View>
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
    padding: 20,
    borderRadius: 10,
    
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default GettingStartedScreen;