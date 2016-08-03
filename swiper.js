'use strict';
var Swiper = require('react-native-swiper')
// es6
// import Swiper from 'react-native-swiper'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
// var swiper = React.createClass({
//   render: function() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     )
//   }
// })
// var styles = StyleSheet.create({
//   wrapper: {
//   },
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }
// })
// const styles = StyleSheet.create({
//   wrapper: {
//   },
//
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
//
// export default class swiper extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       items: []
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       items: [
//         { title: 'Hello Swiper', css: styles.slide1 },
//         { title: 'Beautiful', css: styles.slide2 },
//         { title: 'And simple', css: styles.slide3 }
//       ]
//     })
//   }
//
//   render() {
//     return (
//       <Swiper showsButtons={true}>
//         {this.state.items.map((item, key) => {
//           return (
//             <View key={key} style={item.css}>
//               <Text style={styles.text}>{item.title}</Text>
//             </View>
//           )
//         })}
//       </Swiper>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   wrapper: {
//   },
//
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent'
//   },
//
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//
//   image: {
//     flex: 1,
//   }
// })
//
// export default class swiper extends React.Component {
//   render() {
//     return (
//       <View>
//         <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay={true} autoplayTimeout={2}
//         dot={<View style={{backgroundColor:'rgba(0,255,255,1)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
//
//         >
//           <View style={styles.slide1}>
//             <Text style={styles.text}>Hello Swiper</Text>
//           </View>
//           <View style={styles.slide2}>
//             <Text style={styles.text}>Beautiful</Text>
//           </View>
//           <View style={styles.slide3}>
//             <Text style={styles.text}>And simple</Text>
//           </View>
//         </Swiper>
//
//         <Swiper style={styles.wrapper} height={240}
//           onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
//           dot={<View style={{backgroundColor:'rgba(255,255,255,1)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
//           activeDot={<View style={{backgroundColor: '#ffffff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
//           paginationStyle={{
//             bottom: 3, left: null, right: 100,
//           }} loop={true}>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
//             <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
//             <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
//             <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
//             <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
//           </View>
//         </Swiper>
//       </View>
//     )
//   }
// }
const styles = StyleSheet.create({
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    flex: 1
  }
})

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 25,
      right: 10
    }}>
      <Text>
        <Text style={{
          color: '#007aff',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class swiper extends React.Component {
  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} height={240}
          renderPagination={renderPagination}
          paginationStyle={{
            bottom: 23, left: null, right: 10,
          }} loop={false}>
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image style={styles.image} source={'./b.png'} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
          </View>
        </Swiper>
      </View>
    )
  }
}
module.exports = swiper;
