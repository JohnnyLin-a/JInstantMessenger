/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ProfileSetup from './src/components/ProfileSetup';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <ProfileSetup />
      </View>
    </>
  );
};

export default App;
