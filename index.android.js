'use strict';
import {Scene, Router} from 'react-native-router-flux';

var React = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
  AppRegistry
} = React;
var SliderExample = require("./SliderExample");
var Exp = require("./Exp");
var Item = require("./Item");
//var index = require("./index");
var object = require("./object");
var GridLayoutExample = require("./GridLayoutExample");
AppRegistry.registerComponent('projecttest', () => object);
