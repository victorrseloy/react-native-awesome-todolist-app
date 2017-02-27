import React,{Component} from 'react'
import {StyleProvider,Container,Header,Title,Body,Content,Right,Footer} from 'native-base'
import {TouchableHighlight,Image,StyleSheet} from 'react-native'
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/commonColor';
import Toast, {DURATION} from 'react-native-easy-toast'


/**
 * this component is the main template for app, the header footer and general look and fell
 * of this app is defined
 */
export default class AppTemplate extends Component{

    /**
     * normal render method from react
     *
     * @return {XML} - the component
     */
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header style={AllListsViewNativeBaseStyle.header}>
                        <Body>
                        <Title>My Lists</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{backgroundColor:'#FFFFFF'}}>
                        {this.renderBody()}
                    </Content>
                    <Toast ref="toast"/>
                    <Footer style={AllListsViewNativeBaseStyle.footer}>
                        <TouchableHighlight onPress={this.createButtonClick.bind(this)}>
                            <Image style={AllListsViewStyle.plusButton}  source={(require('../../assets/images/plus_icon.png'))} />
                        </TouchableHighlight>
                    </Footer>

                </Container>
            </StyleProvider>
        )
    }



    /**
     * this method will render the body of the views that inherits from this class
     * each view needs to override this method
     *
     * @return {XML}
     */
    renderBody(){
        throw new Error('renderBody() method from AppTemplate need to be override');
    }


    /**
     * here the action from the '+' button is handled.
     * @param e
     */
    createButtonClick(e){
        throw new Error('createButtonClick() method from AppTemplate need to be override');
    }

    showToast(message){
        this.refs.toast.show(message);
    }


    createButtonClickEnabled(){
        return false;
    }
}

var AllListsViewStyle = StyleSheet.create({
    plusButton:{
        width:40,
        height:40,
        paddingTop:5,
        paddingBottom:5
    }
});

var AllListsViewNativeBaseStyle = {
    header:{
        alignItems:'center',
        justifyContent:'flex-end',
    },
    footer:{
        alignItems:'center',
        justifyContent:'center',
    }
}


