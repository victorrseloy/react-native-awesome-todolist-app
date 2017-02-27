import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FacebookLoginButton from '../components/FacebookLoginButton';
import AllListsView from './AllListsView';


export default class LoginView extends Component{
    render(){
        return <Image source={require('../../assets/images/LoginBackground.jpg')}
                       style={loginViewStyles.backgroundImage}>
            <View style={loginViewStyles.titleContainerShadow}>
                <View style={loginViewStyles.titleContainer}>
                    <Image style={loginViewStyles.titleImage} source={require('../../assets/images/font.png')}/>
                    <Text style={loginViewStyles.titleText}>Don't Forget The Bread</Text>
                </View>
            </View>
            <View style={loginViewStyles.body}>
                <FBLogin
                    buttonView={<FacebookLoginButton />}
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    permissions={["email","user_friends"]}
                    onLogin={this._onLogin.bind(this)}
                    onLoginFound={this._onLogin.bind(this)}
                    onLoginNotFound={function(e){console.log(e)}}
                    onLogout={function(e){console.log(e)}}
                    onCancel={function(e){console.log(e)}}
                    onPermissionsMissing={function(e){console.log(e)}}
                />
            </View>
        </Image>

    }

    _onLogin(e){
        this.props.navigator.ref.push({view:<AllListsView navigator={{ref:undefined}}/>})
    }
}

var loginViewStyles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        alignItems:'center'

    },
    titleContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 200,
        shadowOffset: {
            height: 40,
            width: 50
        }
    },
    titleText:{
        fontFamily: 'KGBlankSpaceSketch',
        fontSize:26,
        color:'#000000',
    },
    titleImage:{
        width:75,
        height:75
    },
    body:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        flex:1,
        marginBottom:50
    },
    titleContainerShadow:{
        alignSelf: 'stretch',
        backgroundColor:'#444444',
        paddingBottom: 4,
        borderRadius: 5,
    }

})