/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

export default class ProfileSetup extends Component {
  state = {
    displayName: '',
  };

  render() {
    return (
      <View style={[styles.mainContainer, {flex: 1}]}>
        <View style={styles.setupContainer}>
          <View style={[styles.titleContainer, {flex: 1}]}>
            <Text style={styles.titleText}>Please enter your display name</Text>
          </View>
          <View style={[styles.inputContainer, {flex: 1}]}>
            <TextInput
              maxLength={25}
              onChangeText={text => {
                this.setState({displayName: text});
              }}
              placeholder={'MrAnonymous123'}
              style={styles.textInput}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              ToastAndroid.show('onPress', ToastAndroid.SHORT);
            }}>
            <View style={[styles.touchableContainer, {flex: 1}]}>
              <Text style={styles.touchableText}>Next</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  setupContainer: {
    backgroundColor: '#FFFF66',
    height: '40%',
    width: '75%',
    marginHorizontal: '12.5%',
    borderRadius: 15,
  },
  titleContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: '4%',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 17,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#DCEFFB',
    borderRadius: 15,
    margin: '4%',
    justifyContent: 'center',
  },
  textInput: {
    textAlign: 'center',
  },
  touchableContainer: {
    backgroundColor: '#A4DEF5',
    borderRadius: 15,
    margin: '4%',
    justifyContent: 'center',
  },
  touchableText: {
    textAlign: 'center',
    fontSize: 24,
  },
});
