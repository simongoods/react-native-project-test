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
      count: 0,
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
    return (
          <View style={styles.row}>
            <Image style={styles.thumb} source={b} />
            <Text style={styles.text}>
              {rowData}
            </Text>
            <TouchableHighlight onPress={this._pressRow}>
              <Text>
                使用
              </Text>
            </TouchableHighlight>
          </View>
    );
  },

  _genRows: function(num:number): Array<string> {
    if(temp==0){
      num = 0;
    }
    var dataBlob = [];
    for (var ii = 0; ii < text.length; ii++) {
      var pressedText = text[ii] + num;
      dataBlob.push(pressedText);
    }
    temp++;
    return dataBlob;
  },

  _pressRow: function() {
    this.state.count = this.state.count + 1;
     console.log(this.state.count);
     this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this.state.count)
    )});
  },

});

let temp = 0;
var b = require('./b.png');
var text = ['baba touch ','lala touch ','gaga touch ','haha touch ','caca touch ','fafa touch '];
//var THUMB_URLS = ['http://www3.csie.fju.edu.tw/image/teacherImg/T22.jpg','http://www3.csie.fju.edu.tw/image/teacherImg/T23.jpg','http://www3.csie.fju.edu.tw/image/teacherImg/T32.jpg'];
var THUMB_URLS = [require('./b.png')];

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
    //flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#4DFFFF',
    borderRadius: 0,
    // alignItems: 'center',
  },
  outside:{
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
//    width: 200,
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
