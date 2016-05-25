
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
                    <View style={ styles.sliderInner }>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortage amount</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>200,000</Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Interest rate (%)</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>2.6</Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortage Years</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>25</Text>
                        </View>
                    </View>
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
let sliderItemWidth = ( screenWidth / 3 ) + 44;
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
        backgroundColor: 'rgba(0, 0, 0, .1)',
        alignItems: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderInner: {
        width: sliderItemWidth * 3,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    sliderItem: {
        width: sliderItemWidth
    },
    sliderItemTitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    sliderItemValue: {
        fontSize: 35,
        textAlign: 'center'
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
        fontWeight: '300',
        textAlign: 'center'
    }
})

export default InputSlider;
