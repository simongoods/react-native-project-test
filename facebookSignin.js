import React, { PropTypes, Component } from 'react';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

class facebookSignin extends Component {
  render() {
    return (
      <FBLogin
          
          ref={(fbLogin) => { this.fbLogin = fbLogin }}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          permissions={["email","user_friends"]}
          onLogin={function(e){console.log(e)}}
          onLoginFound={function(e){console.log(e)}}
          onLoginNotFound={function(e){console.log(e)}}
          onLogout={function(e){console.log(e)}}
          onCancel={function(e){console.log(e)}}
          onPermissionsMissing={function(e){console.log(e)}}
        />
    );
  }
};
module.exports = facebookSignin;
