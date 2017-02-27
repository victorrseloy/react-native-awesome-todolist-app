/**
 * Created by victor on 2/25/17.
 */
import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');

/**
 Example FBLoginView class
 Please note:
 - this is not meant to be a full example but highlights what you have access to
 - If you use a touchable component, you will need to set the onPress event like below
 **/
export default class FBLoginButtonComponent extends Component {
    static contextTypes = {
        isLoggedIn: React.PropTypes.bool,
        login: React.PropTypes.func,
        logout: React.PropTypes.func,
        props: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{borderRadius:150}}>
                <Icon.Button style={FBButtonStyles.fbButton} onPress={() => {
                if(!this.context.isLoggedIn){
                  this.context.login()
                }else{
                  this.context.logout()
                }
              }}

                    size={20} name={"facebook"}  >
                    Login With Facebook
                </Icon.Button>
            </View>
        )
    }
}

var FBButtonStyles = StyleSheet.create({
    fbButton:{
        width:400,
        height:50,
        backgroundColor:'#3b5998',
        justifyContent:'center',
    }
})
