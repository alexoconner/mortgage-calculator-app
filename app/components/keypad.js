
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

class Keypad extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.container }>
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
                    <Text style={ [styles.font, styles.numberBlock] }>4</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>5</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>6</Text>
                </View>
                <View style={ styles.numberRow }>
                    <Text style={ [styles.font, styles.numberBlock] }>7</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>8</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>9</Text>
                </View>
                <View style={ styles.numberRow }>
                    <Text style={ [styles.font, styles.numberBlock] }>{ '<' }</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>0</Text>
                    <Text style={ [styles.font, styles.numberBlock] }>.</Text>
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
        backgroundColor: '#9C84A7'
    },
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberBlock: {
        width: screenWidth * .3,
        margin: 1
    },
    highlightBlock: {
        backgroundColor: '#D8CEDE'
    },
    font: {
        color: '#FFFFFF',
        fontSize: 40,
        textAlign: 'center'
    }
})

export default Keypad;
