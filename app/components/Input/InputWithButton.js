import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import styles from './styles';

const InputWithButton = ({
  currency, price, editable = true, changeHandler = undefined,
}) => {
  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>{currency}</Text>
      </TouchableHighlight>
      <View style={styles.border} />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        editable={editable}
        defaultValue={price.toString()}
        keyboardType="numeric"
        onChangeText={changeHandler}
      />
    </View>
  );
};

export default InputWithButton;
