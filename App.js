import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Portugues from './src/components/Portugues';
import Ingles from './src/components/Ingles';

export default function App() {
  return (
    <View>

    
        
      <Portugues 
        backColor="black"
        btn1Color="lightblue" 
        btn2Color="blue" 
        btn3Color="darkblue"
        input1Placeholder="Você Curte Metal?"
        input2Placeholder="Qual sua banda Favorita?"
        input3Placeholder="Vamos là!" />

        <Ingles 
        backColor="darkgray"
        btn1Color="lightgreen" 
        btn2Color="green" 
        btn3Color="darkgreen"
        input1Placeholder="Do You Like Metal Bands?"
        input2Placeholder="What's your favorite Band?"
        input3Placeholder="Let's Go!" />  
      
    </View>
  );
}