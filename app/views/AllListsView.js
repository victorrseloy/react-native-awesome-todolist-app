import React,{Component} from 'react';
import {TouchableHighlight,Image,StyleSheet} from 'react-native';
import ListsListView from '../components/ListsListView/ListsListView';
import AppTemplate from '../components/AppTemplate';
import CreateListView from '../views/CreateListView';


export default class AllListsView extends AppTemplate{


    renderBody(){
        return <ListsListView toastMethod={this.showToast.bind(this)} navigator={{ref:this.props.navigator.ref}}/>
    }

    renderFooterButtons(){
        return (
            <TouchableHighlight onPress={this.createButtonClick.bind(this)}>
                <Image style={AllListsViewStyle.plusButton}  source={(require('../../assets/images/plus_icon.png'))} />
            </TouchableHighlight>
        )
    }

    getTitle(){
        return "My Lists";
    }


    createButtonClick(){
        this.props.navigator.ref.push({id:'CreateListView',view:<CreateListView toastMethod={this.showToast.bind(this)} navigator={{ref:undefined}} />});
    }

}

const AllListsViewStyle = StyleSheet.create({
    plusButton:{
        width:40,
        height:40,
        paddingTop:5,
        paddingBottom:5
    }
});

