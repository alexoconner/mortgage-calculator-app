/**
 * Mortgage Calculator App
 * (C) Alexander Skrabl <alexander@skrabl.de> (http://alexanderskrabl.com)
 * @Credits: Design & Concept by Kevin Lofthouse (http://lofthou.se/)
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import App from './app/app';

AppRegistry.registerComponent('mortgageCalculatorApp', () => App);
