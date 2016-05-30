'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} = React;


var Statusbar = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
    		 <View style={styles.Top_status}>
            <View style={styles.Top_status_L}>
              <Text style={styles.Top_welcome_L}>水</Text>
            </View>
            <View style={styles.Top_status_R}>
                <TouchableOpacity onPress={this._pressButton}>
                  <Text style={styles.Top_welcome_R}>冰櫃神速</Text>
                </TouchableOpacity>
            </View>
          </View>
    	</View>

    );
  },

});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
	},
  Top_status: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  Top_status_L: {
    flex: 1,
    backgroundColor: '#0080FF',
    borderWidth: 5,
    borderColor: '#4DFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,


  },
  Top_welcome_L: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  Top_status_R:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    borderColor: '#5B5B5B',
    borderTopColor: '#E0E0E0',
    borderLeftColor: '#ADADAD',
    borderRightColor: '#8E8E8E',
  },
  Top_welcome_R: {
    fontSize: 30,
    color: 'black',
  },
 });
module.exports = Statusbar;
