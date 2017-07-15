
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  Navigator
} from 'react-native';

import { EVENTS } from './constants/constants';
import appDispatcher from './dispatcher/appDispatcher';
import InputSlider from './components/InputSlider';
import Keypad from './components/Keypad';
import Result from './components/Result';
// import { MainBackground } from './components/backgrounds';

class App extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Image
          style={ styles.mainBackground }
          source={ require('./assets/mainBackground.png') }
        />
        <View style={ styles.resultContainer }>
          <Result />
        </View>
        <View style={ styles.keypadContainer }>
          <Keypad
            height={ keyPadHeight }
          />
        </View>
        <View style={ styles.inputSliderContainer }>
          <InputSlider />
        </View>
      </View>
    )
  }
}

let screenHeight = Dimensions.get("window").height;
const keyPadHeight = 352;
const sliderHeight = 105;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  mainBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    resizeMode: 'cover'
  },
  resultContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 60,
    backgroundColor: 'transparent'
  },
  inputSliderContainer: {
    position: 'absolute',
    bottom: keyPadHeight - 2,
    left: 0,
    right: 0,
    height: sliderHeight,
  },
  keypadContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: keyPadHeight
  },
  font: {
    color: '#FFFFFF',
    fontWeight: '300'
  }
});

export default App;
