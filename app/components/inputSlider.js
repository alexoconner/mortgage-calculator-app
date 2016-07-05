
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

import { EVENTS, SLIDER_STATES } from '../constants/constants';
import appDispatcher from '../dispatcher/appDispatcher';
import { SliderBackground } from './backgrounds';

class InputSlider extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            mortgageAmount: '',
            interestRate: '',
            mortgageYears: '',
            sliderPos: new Animated.Value(sliderItemTwoPos),
            currentSlide: SLIDER_STATES.INTEREST_RATE
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
                    [this.state.currentSlide]: this.state[this.state.currentSlide] + payload.actionValue
                });
            }
            if ( payload.actionType === EVENTS.DELETE_NUMBER ) {
                let newNumber;

                if ( this.state[this.state.currentSlide].charAt( this.state[this.state.currentSlide].length - 2 ) === '.' ) {
                    newNumber = this.state[this.state.currentSlide].substring( 0, this.state[this.state.currentSlide].length - 2 )
                }
                else {
                    newNumber = this.state[this.state.currentSlide].substring( 0, this.state[this.state.currentSlide].length - 1 )
                }

                this.setState({
                    [this.state.currentSlide]: newNumber
                });
            }
        });
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

        let toLeft = 0;
        let toRight = 0;
        let toLeftSlide = '';
        let toRightSlide = '';
        switch ( this.state.currentSlide ) {
            case 'mortgageAmount':
                toLeft = sliderItemOnePos;
                toRight = sliderItemTwoPos;
                toLeftSlide = SLIDER_STATES.MORTGAGE_AMOUNT;
                toRightSlide = SLIDER_STATES.INTEREST_RATE;
                break;
            case 'interestRate':
                toLeft = sliderItemOnePos;
                toRight = sliderItemThreePos;
                toLeftSlide = SLIDER_STATES.MORTGAGE_AMOUNT;
                toRightSlide = SLIDER_STATES.MORTGAGE_YEARS;
                break;
            case 'mortgageYears':
                toLeft = sliderItemTwoPos;
                toRight = sliderItemThreePos;
                toLeftSlide = SLIDER_STATES.INTEREST_RATE;
                toRightSlide = SLIDER_STATES.MORTGAGE_YEARS;
                break;
        }

        setTimeout( () => {
            if ( locationX < this.fingerPos ) {
                console.log('swiping left');
                Animated.timing(
                   this.state.sliderPos,
                   {
                       toValue: toLeft,
                       friction: 1
                   }
                ).start();
                this.setState({
                    currentSlide: toLeftSlide
                });
            }
            if ( locationX > this.fingerPos ) {
                console.log('swiping right');
                Animated.timing(
                   this.state.sliderPos,
                   {
                       toValue: toRight,
                       friction: 1
                   }
                ).start();
                this.setState({
                    currentSlide: toRightSlide
                });
            }
        }, 300);

        this.fingerPos = e.nativeEvent.locationX;
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
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortgage amount</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>
                                { this.state.mortgageAmount }
                            </Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Interest rate (%)</Text>
                            <Text style={ [styles.font, styles.sliderItemValue] }>
                                { this.state.interestRate }
                            </Text>
                        </View>
                        <View style={ styles.sliderItem }>
                            <Text style={ [styles.font, styles.sliderItemTitle] }>Mortgage Years</Text>
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
let screenCenter = screenWidth / 2;
let sliderItemWidth = ( screenWidth / 3 ) + 44;
let sliderCenter = ( sliderItemWidth * 3 ) / 2;
let sliderItemOnePos = screenCenter - ( sliderCenter - sliderItemWidth );
let sliderItemTwoPos = screenCenter - sliderCenter;
let sliderItemThreePos = screenCenter - ( sliderCenter + sliderItemWidth );

console.log(screenWidth / 2, sliderCenter, sliderItemTwoPos);

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
