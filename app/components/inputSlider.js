
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Animated,
    TouchableHighlight
} from 'react-native';

import { EVENTS } from '../constants/constants';
import appDispatcher from '../dispatcher/appDispatcher';
import { SliderBackground } from './backgrounds';

class InputSlider extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            mortgageAmount: '200000',
            interestRateVal: '',
            mortgageYears: '25',
            sliderPos: new Animated.Value(0)
        };

        this.fingerPos = 0;
    }

    componentDidMount() {
        /**
         * event handling
         * @param  {[type]} (payload [description]
         * @return {[type]}          [description]
         */
        appDispatcher.register( (payload) => {
            if ( payload.actionType === EVENTS.UPDATE_NUMBER ) {
                this.setState({
                    interestRateVal: this.state.interestRateVal + payload.actionValue
                });
            }
            if ( payload.actionType === EVENTS.DELETE_NUMBER ) {
                let newNumber;

                if ( this.state.interestRateVal.charAt( this.state.interestRateVal.length - 2 ) === '.' ) {
                    newNumber = this.state.interestRateVal.substring( 0, this.state.interestRateVal.length - 2 )
                }
                else {
                    newNumber = this.state.interestRateVal.substring( 0, this.state.interestRateVal.length - 1 )
                }

                this.setState({
                    interestRateVal: newNumber
                });
            }
        });

        /**
         * testing animations
         */
        //  this.state.sliderPos.setValue( 0 );
        //     Animated.timing(
        //        this.state.sliderPos,
        //        {
        //            toValue: 60,
        //            friction: 1
        //        }
        //     ).start();
    }

    /**
     * component updates
     * @return {[type]} [description]
     */
    componentDidUpdate() {
        appDispatcher.dispatch({
            actionType: EVENTS.UPDATE_CALC_VALUES,
            actionValue: this.state
        });
    }

    inputSlide(e) {
        let locationX = e.nativeEvent.locationX;

        if ( locationX < this.fingerPos ) {
            console.log('swiping left');
            Animated.timing(
               this.state.sliderPos,
               {
                   toValue: 0,
                   friction: 1
               }
            ).start();
        }
        if ( locationX > this.fingerPos ) {
            console.log('swiping right');
            Animated.timing(
               this.state.sliderPos,
               {
                   toValue: 200,
                   friction: 1
               }
            ).start();
        }

        this.fingerPos = e.nativeEvent.locationX;
        // Animated.timing(
        //    this.state.sliderPos,
        //    {
        //        toValue: 60,
        //        friction: 1
        //    }
        // ).start();
    }

    render() {

        return (
            <View style={ styles.container }>
                <View style={ styles.slider }>
                    <Animated.View style={ [
                        styles.sliderInner,
                        {
                            left: this.state.sliderPos
                        }
                    ]}>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortage amount</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>
                                { this.state.mortgageAmount }
                            </Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Interest rate (%)</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>
                                { this.state.interestRateVal }
                            </Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortage Years</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>
                                { this.state.mortgageYears }
                            </Text>
                        </View>
                    </Animated.View>
                </View>
                <Image
                    onMoveShouldSetResponder={ () => { return true } }
                    onResponderMove={ (e) => this.inputSlide(e) }
                    style={ styles.background }
                    source={ require('../assets/inputBackground.png') }
                />
            </View>
        )
    }
}

let screenWidth = Dimensions.get("window").width;
let sliderItemWidth = ( screenWidth / 3 ) + 44;
let sliderCenter = ( sliderItemWidth * 3 ) / 2;
let sliderItemOnePos = sliderCenter - ( sliderItemWidth / 2 ) + sliderItemWidth;
let sliderItemTwoPos = sliderCenter - sliderItemWidth / 2;
let sliderItemThreePos = sliderCenter - ( sliderItemWidth / 2 ) - sliderItemWidth;

console.log(sliderItemOnePos, sliderItemTwoPos, sliderItemThreePos);

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
        width: sliderItemWidth,
        overflow: 'hidden',
        flexWrap: 'nowrap'
    },
    sliderItemTitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    sliderItemValue: {
        fontSize: 35,
        textAlign: 'center',
        overflow: 'hidden'
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
