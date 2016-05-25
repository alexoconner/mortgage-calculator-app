
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import { SliderBackground } from './backgrounds';

class InputSlider extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.slider }>
                    <Text style={ styles.font }>Input Slider</Text>
                </View>
                <Image
                    style={ styles.background }
                    source={ require('../assets/inputBackground.png') }
                />
                {/*<SliderBackground
                    style={ styles.background }
                    width={ 200 }
                    height={ 100 }
                />*/}
            </View>
        )
    }
}

let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
        // backgroundColor: '#FFFFFF'
    },
    slider: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 2,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, .1)'
        // backgroundColor: '#FFFFFF'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: -3,
        // width: screenWidth,
        // height: 113,
        resizeMode: 'stretch'
    },
    font: {
        color: '#FFFFFF',
        fontSize: 40,
        textAlign: 'center'
    }
})

export default InputSlider;
