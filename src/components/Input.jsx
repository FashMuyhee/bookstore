import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    color: 'black',
  },
});
