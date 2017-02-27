import React,{Component} from 'react';
import {Navigator,Platform,BackAndroid} from 'react-native';
import LoginView from './LoginView';




/**
 * This View is the common entry point for IOs and Android
 * from here we will start our navigator, general navigation rules
 * and call the first view
 */
export default class MainView extends Component{

    constructor(){
        super()
        //binding back button listeners
        if (Platform.OS == 'android') {
            BackAndroid.addEventListener('hardwareBackPress', function () {
                this.props.navigator.ref.pop();
                return true;
            }.bind(this));
        }
    }

    render(){
        return (
            <Navigator initialRoute={{id:'LoginVIew',view:<LoginView navigator={{ref:undefined}} />}}
                            renderScene={this.renderScene.bind(this)}
                            configureScene={() => FloatFromRight}/>
        )
    }

    /**
     *
     * this method handles the scene rendering,
     * this mehtod will also pass a navigator reference to the scenes
     *
     * @param sceneProps
     * @param navigator
     * @return {XML|styles.view|{opacity, backgroundColor}|*|WindowProxy}
     */
    renderScene(sceneProps,navigator){
        sceneProps.view.props.navigator.ref = navigator;
        return sceneProps.view;
    }
}


const SCREEN_WIDTH = require('Dimensions').get('window').width;

/**
 * Overwrite the default navigator scene config.
 * to use a wider area for back swiping.
 */
const FloatFromRight = {
    ...Navigator.SceneConfigs.FloatFromRight,
    gestures: {
        pop: {
            ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
            edgeHitWidth: SCREEN_WIDTH / 2,
        },
    },
};