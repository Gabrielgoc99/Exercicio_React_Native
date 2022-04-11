import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';

export const Portugues = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backColor}]}>
    <TextInput
        style={styles.input}
        placeholder={props.input1Placeholder}
      />
      <Text style={styles.paragraph}>
        Linkin Park
      </Text>
      
      <Image style={styles.imagem} source={require('../../assets/Linkin_Park.jpg')} />   
      <Text style={styles.paragraph}>
        Pins Bandas de Metal!
      </Text>      
        <Image style={styles.imagem} source={require('../../assets/Metal_Bands_Pin.jpg')} />        
        <Text style={styles.paragraph}>
        System of a Down!
      </Text>
           <Image style={styles.imagem} source={require('../../assets/SOAD.jpg')} />
      <Text style={styles.paragraph}>
        E aí, curtiu?
      </Text>
      <View style={styles.itensContainer}>
        <Button
          title="Sim"
          color={props.btn1Color}
        />
        <Button
          title="Não!"
          color={props.btn2Color}
        />
        <Button
          title="Talvez!"
          color={props.btn3Color}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.input2Placeholder}
      />
      <TextInput
        style={styles.input}
        placeholder={props.input3Placeholder}
      />
    </View>
  );
}
export default Portugues;
