'use strict'

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './components/main/mainScreen';
import SendingScreen from './components/sending/sendingScreen';

const CasanovaApp = StackNavigator({
  Main: {screen: MainScreen},
  Sending: {screen: SendingScreen}
});

AppRegistry.registerComponent('casanova', () => CasanovaApp);
