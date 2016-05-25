
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import { EVENTS } from '../constants/constants';
import appDispatcher from '../dispatcher/appDispatcher';

class Keypad extends Component {
    constructor( props ) {
        super( props );
    }

    keyPress( action ) {
        console.log( action );
    }

    render() {
        return (
            <View style={ styles.container }>
                <Image
                    style={ [styles.background, { height: this.props.height }] }
                    source={ require('../assets/bgKeyboard.png') }
                />
                <View style={ styles.numberRow }>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('1') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('2') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('3') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>3</Text>
                    </TouchableHighlight>
                </View>
                <View style={ styles.numberRow }>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('4') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>4</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('5') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>5</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('6') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>6</Text>
                    </TouchableHighlight>
                </View>
                <View style={ styles.numberRow }>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('7') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>7</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('8') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>8</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('9') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>9</Text>
                    </TouchableHighlight>
                </View>
                <View style={ styles.numberRow }>
                    <TouchableHighlight
                        style={ [styles.numberBlock] }
                        onPress={ () => this.keyPress('delete') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>{ '<' }</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock, styles.highlightBlock] }
                        onPress={ () => this.keyPress('0') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ [styles.numberBlock] }
                        onPress={ () => this.keyPress('.') }
                        underlayColor={ keyPressUnderlayColor }
                    >
                        <Text style={ styles.font }>.</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

let screenWidth = Dimensions.get("window").width;
const keyPressUnderlayColor = 'rgba(255, 255, 255, .4)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    numberBlock: {
        width: screenWidth * .333,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 1
    },
    highlightBlock: {
        backgroundColor: 'rgba(216, 216, 216, .1)'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        // width: screenWidth,
        resizeMode: 'cover'
    },
    font: {
        color: '#FFFFFF',
        fontWeight: '200',
        fontSize: 40,
        textAlign: 'center'
    }
})

export default Keypad;
