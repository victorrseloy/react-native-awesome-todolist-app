import React,{Component} from 'react';
import {TouchableHighlight,Image,StyleSheet} from 'react-native';
import AppTemplate from '../components/AppTemplate';
import TodoListViewComponent from '../components/TodoListViewComponent/TodoListViewComponent'


export default class TodoListView extends AppTemplate{


    renderBody(){
        return <TodoListViewComponent />
    }

    renderFooterButtons(){
        return (
            <TouchableHighlight>
                <Image style={AllListsViewStyle.plusButton}  source={(require('../../assets/images/plus_icon.png'))} />
            </TouchableHighlight>
        )
    }

    getTitle(){
        return "Give a propper title";
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

