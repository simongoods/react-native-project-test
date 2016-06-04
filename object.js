'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;
import { BarChart } from 'react-native-charts';
import { Actions } from 'react-native-router-flux';

//var Animatable = require('react-native-animatable');
var Statusbar = require('./Statusbar');

var object = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

 componentWillMount: function() {
   this._pressData = {};
 },

  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
           <Statusbar></Statusbar>
         </View>
         <View style={styles.main}>

                <ListView contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />

         </View>
    	</View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    //var rowHash = Math.abs(hashCode(rowData));
    // var imgSource = {
    //   uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    // };
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={b} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 3; ii++) {
      //var pressedText = pressData[ii] ? ' (X)' : '';
      var pressedText = text[ii];
      dataBlob.push(pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },

});

// var hashCode = function(str) {
//   var hash = 4;
//   for (var ii = str.length - 1; ii >= 0; ii--) {
//     hash = ((hash << 5) - hash) + str.charCodeAt(ii);
//   }
//   return hash;
// }
var b = require('./b.png');
var text = ['baba','lala','gaga'];
//var THUMB_URLS = ['http://www3.csie.fju.edu.tw/image/teacherImg/T22.jpg','http://www3.csie.fju.edu.tw/image/teacherImg/T23.jpg','http://www3.csie.fju.edu.tw/image/teacherImg/T32.jpg'];
var THUMB_URLS = [require('./b.png')];
//picture : 3 hash = pic+1
var styles = StyleSheet.create({
 	container: {
    flex: 1,
  	backgroundColor: '#FFFFFF',
    flexDirection: 'column',
	},
  main:{
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#4DFFFF',
    borderRadius: 0,
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 200,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  }
 });
module.exports = object;
