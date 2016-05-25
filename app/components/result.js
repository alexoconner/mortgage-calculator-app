
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

        mortgageAmount = parseFloat( mortgageAmount );
        interestRateVal = parseFloat( interestRateVal );
        mortgageYears = parseFloat( mortgageYears );

        monthlyTotal = ( mortgageAmount + ( mortgageAmount * ( interestRateVal / 100 ) ) / mortgageYears ) / 12;
        // monthlyTotal = mortgageAmount + ( mortgageAmount * ( interestRateVal / 100 ) );
        monthlyTotal = Math.round( monthlyTotal * 100 ) / 100;

        return monthlyTotal;
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
