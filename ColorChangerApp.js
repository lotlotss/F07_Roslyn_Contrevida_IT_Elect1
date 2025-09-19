import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Using hex code for white

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#ffffff' }]}
        onPress={() => changeColor('#ffffff')}
      >
        <Text>Reset to White</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#add8e6' }]}
        onPress={() => changeColor('#add8e6')}
      >
        <Text>Light Blue</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#90ee90' }]}
        onPress={() => changeColor('#90ee90')}
      >
        <Text>Light Green</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333333', // Dark text for visibility
  },
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
});

export default ColorChangerApp;