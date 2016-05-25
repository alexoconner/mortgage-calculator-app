
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

import InputSlider from './components/inputSlider';
import Keypad from './components/keypad';
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
                <Text style={ styles.font }>Mortgage Calculator App { screenHeight * .6 }</Text>
                <Image
                    style={ styles.mainBackground }
                    source={ require('./assets/mainBackground.png') }
                />
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
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5B1A53'
    },
    mainBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        resizeMode: 'cover'
    },
    inputSliderContainer: {
        position: 'absolute',
        bottom: keyPadHeight - 2,
        left: 0,
        right: 0,
        height: 105,
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
        color: '#FFFFFF'
    }
})

export default App;
