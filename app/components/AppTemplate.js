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
                        <Title>{this.getTitle()}</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{backgroundColor:'#FFFFFF'}}>
                        {this.renderBody()}
                    </Content>
                    <Toast ref="toast" position='center'
                           positionValue={200}
                           fadeInDuration={750}
                           fadeOutDuration={1000}
                           opacity={0.6}
                    />
                    <Footer style={AllListsViewNativeBaseStyle.footer}>
                        {this.renderFooterButtons()}
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
     * if you want to add buttons to the app footer this can be done here
     * @return {null}
     */
    renderFooterButtons(){
        return null;
    }


    /**
     * this method can be used to show 'toast' messages
     * normally you will want to pass messages from one view to another
     * in this case this function need to be passed as parameter to the caller
     * component
     *
     * @param message - the message to be show
     */
    showToast(message){
        this.refs.toast.show(message);
    }

    /**
     * The view's title will be rendered from this function
     *
     * @return {String} - the title
     */
    getTitle(){
        throw new Error('all views that inherit from AppTemplate should override getTitle()')
    }


}



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


