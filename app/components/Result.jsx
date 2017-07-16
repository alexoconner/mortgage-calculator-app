import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import { EVENTS } from '../constants/constants';
import appDispatcher from '../dispatcher/appDispatcher';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthlyTotal: '',
    };
  }

  componentDidMount() {
    appDispatcher.register((payload) => {
      console.log(payload);
      if (
        payload.actionType===EVENTS.UPDATE_CALC_VALUES
      ) {
        this.setState({
          monthlyTotal: this.calculateMonthlyTotal(payload.actionValue),
        });
      }
    });
  }

  /**
  * calculates monthly total
  * @param  {[type]} values [object]
  * @return {[type]} [string]
  */
  calculateMonthlyTotal(values) {
    const { mortgageAmount, interestRate, mortgageYears } = values;
    let monthlyTotal;
    const mA = parseFloat(mortgageAmount);
    const iR = (parseFloat(interestRate) / 12) / 100;
    const mY = parseFloat(mortgageYears) * 12;
    const pmt = this.pmt(iR, mY, mA);

    monthlyTotal = pmt;
    monthlyTotal = Math.floor(monthlyTotal);

    return isNaN(monthlyTotal) === true ? '---' : monthlyTotal;
  }

  /**
  * pmt function to calculate monthly payments
  * @return {[type]} [number]
  */
  pmt(interestRate, mortgageMonths, mortgageAmount) {
    return mortgageAmount * interestRate * (Math.pow(1 + interestRate, mortgageMonths)) / (Math.pow(1 + interestRate, mortgageMonths) - 1);
  }

  render() {
    return (
      <View>
        <Text style={[styles.font, styles.resultTitle]}>Monthly Total</Text>
        <Text style={[styles.font, styles.resultNumber]}>
          { this.state.monthlyTotal }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  resultNumber: {
    fontSize: 60,
    textAlign: 'center',
  },
  font: {
    color: '#FFFFFF',
    fontWeight: '300',
  },
});

export default Result;
