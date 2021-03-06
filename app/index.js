import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: 'white',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $disabledBackground: '#F0F0F0',
});

export default () => <Home />;
