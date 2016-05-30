import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

var SliderExample = require("./SliderExample");
var Exp = require("./Exp");
var Item = require("./Item");

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Exp" component={Exp} title="Exp" initial={true} />
          <Scene key="Item" component={Item} title="Item" />
          <Scene key="SliderExample" component={SliderExample} title="SliderExample" />
        </Scene>
      </Router>
    )
  }
}
module.exports = index;
