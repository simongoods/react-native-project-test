'use strict';

var React = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} = React;
import { Router, Scene } from 'react-native-router-flux';

var SliderExample = React.createClass({
   getDefaultProps() {
     return {
  //     value: 0,
  //     max: 10,
       maximumValue :15,
       step:1,
     }
   },

  getInitialState() {
    return {
      // value: this.state.value,
      // max: this.state.max,
      value1: 0,
      value2: 0,
      value3: 0,
      total: 0,
      max: 10,
      x:0,
      //maximumValue :15,
      //step:1,
    };
  },
  _checkmoreThanmax: function(value){
    this.state.total = this.state.value1 + this.state.value2 +this.state. value3;
    console.log(this.state.total);
    // if(this.state.total > this.state.max){
    //   this.state.value1 = 10;
    //   this.state.x++;
    //   console.log(this.state.total);
    // }
  }
  ,

  render() {
    //小數精確
    return (
       <View>
         <Text style={styles.text}>
          {this.state.value1 && +this.state.value1.toFixed(2)}
          hi~
          {this.state.x}
         </Text>
        <Slider
          {...this.props}
          onValueChange={(value1) => this.setState({value1: value1})}/>

        <Text style={styles.text}>
          {this.state.value2 && +this.state.value2.toFixed(2)}
          ho~
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value2) => this.setState({value2: value2})}/>

        <Text style={styles.text}>
          {this.state.value3 && +this.state.value3.toFixed(2)}
          ga~
          {"\n\n"}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value3) => this.setState({value3: value3})}/>

      <TouchableHighlight
      onPress={this._checkmoreThanmax} style={styles.touchable}>
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.total} </Text>
          </View>
      </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  textleft: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  touchable: {
    borderRadius: 50
    //陰影
  },
  button: {
    backgroundColor: '#F003F0',
    borderRadius: 50,//圓弧程度
    height: 200,
    width: 200,
    justifyContent: 'center'
},
});
module.exports = SliderExample;
