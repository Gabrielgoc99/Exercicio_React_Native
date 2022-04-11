import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';

export const Ingles = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backColor}]}>
      <Image style={styles.imagem} source={require('../../assets/A_Day_To_Remember.jpg')} />
      <TextInput
        style={styles.input}
        placeholder={props.input1Placeholder}
      />
      <Text style={styles.paragraph}>
        A Day to Remember!
      </Text>
        <View style={styles.itensContainer}>
        <Image style={styles.imagem} source={require('../../assets/Alice_in_Chains.jpg')} />
        <Image style={styles.imagem} source={require('../../assets/Daed_Fish_Afasia.jpg')} />
      </View>
      <Text style={styles.paragraph}>
        Alice in Chains and Dead Fish!
      </Text>
      <Text style={styles.paragraph}>
        E aí, curtiu?!
      </Text>
      <View style={styles.itensContainer}>
        <Button
          title="Yes"
          color={props.btn1Color}
        />
        <Button
          title="No"
          color={props.btn2Color}
        />
        <Button
          title="Maybe"
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
export default Ingles;
