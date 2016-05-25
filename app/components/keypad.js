
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

class Keypad extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.container }>
                <Image
                    style={ [styles.background, { height: this.props.height }] }
                    source={ require('../assets/bgKeyboard.png') }
                />
                <View style={ styles.numberRow }>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>1</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>2</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>3</Text>
                    </View>
                </View>
                <View style={ styles.numberRow }>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>4</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>5</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>6</Text>
                    </View>
                </View>
                <View style={ styles.numberRow }>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>7</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>8</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>9</Text>
                    </View>
                </View>
                <View style={ styles.numberRow }>
                    <View style={ [styles.numberBlock] }>
                        <Text style={ styles.font }>{ '<' }</Text>
                    </View>
                    <View style={ [styles.numberBlock, styles.highlightBlock] }>
                        <Text style={ styles.font }>0</Text>
                    </View>
                    <View style={ [styles.numberBlock] }>
                        <Text style={ styles.font }>.</Text>
                    </View>
                </View>
            </View>
        )
    }
}

let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
