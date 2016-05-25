
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    Navigator
} from 'react-native';

import Keypad from './components/keypad';

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
                <View style={ styles.keypadContainer }>
                    <Keypad />
                </View>
            </View>
        )
    }
}

let screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5B1A53',
        paddingTop: 20
    },
    keypadContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        height: screenHeight * .6
    },
    font: {
        color: '#FFFFFF'
    }
})

export default App;
