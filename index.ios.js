/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import App from './App';
import ImageCapture from './ImageCapture'
import PhoneCalling from './PhoneCalling'

export default class CameraApp extends Component {
  render() {
    return (
        <Router>
            <Scene
                key="root"
            >
                <Scene
                    key="App"
                    component={App}
                    title="Hey Rehaan"
                />
                <Scene
                    key="ImageCapture"
                    component={ImageCapture}
                    title="ImageCapture"
                />
                <Scene
                    key="PhoneCalling"
                    component={PhoneCalling}
                    title="PhoneCalling"
                />
            </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
