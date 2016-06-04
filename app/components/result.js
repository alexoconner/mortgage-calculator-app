
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import { EVENTS } from '../constants/constants';
import appDispatcher from '../dispatcher/appDispatcher';

class Result extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            monthlyTotal: ''
        };
    }

    componentDidMount() {
        appDispatcher.register( ( payload ) => {
            console.log(payload);
            if ( payload.actionType === EVENTS.UPDATE_CALC_VALUES ) {
                this.setState({
                    monthlyTotal: this.calculateMonthlyTotal( payload.actionValue )
                });
            }
        });
    }

    /**
     * calculates monthly total
     * @param  {[type]} values [object]
     * @return {[type]} [string]
     */
    calculateMonthlyTotal( values ) {
        let { mortgageAmount, interestRateVal, mortgageYears } = values;
        let monthlyTotal;
        let mA = parseFloat( mortgageAmount );
        let iR = parseFloat( interestRateVal );
        let mY = parseFloat( mortgageYears );

        // monthlyTotal = 200000 * (2.2/(12*100)/(1-(1+2.2/(12*100)) ** -(25*12)) )
        monthlyTotal = mA * ( iR / ( 12 * 100 ) ); // / Math.pow ( ( 1 - ( 1 + iR / ( 12 * 100 ) ) ), -( mY * 12 ) )
        // let right = -( mY * 12 );
        // monthlyTotal = Math.pow ( left, right );
        // monthlyTotal = mortgageAmount + ( mortgageAmount * ( interestRateVal / 100 ) );
        monthlyTotal = Math.round( monthlyTotal * 100 ) / 100;

        return isNaN(monthlyTotal) === true ? '---' : monthlyTotal;
    }

    render() {
        return (
            <View>
                <Text style={ [styles.font, styles.resultTitle ] }>Monthly Total</Text>
                <Text style={ [styles.font, styles.resultNumber ] }>
                    { this.state.monthlyTotal }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resultTitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    resultNumber: {
        fontSize: 60,
        textAlign: 'center'
    },
    font: {
        color: '#FFFFFF',
        fontWeight: '300'
    }
});

export default Result;
