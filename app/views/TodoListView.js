import React,{Component} from 'react';
import {TouchableHighlight,Image,StyleSheet} from 'react-native';
import AppTemplate from '../components/AppTemplate';
import TodoListViewComponent from '../components/TodoListViewComponent/TodoListViewComponent'
import CreateTodoListItemView from './CreateTodoListItemView'


export default class TodoListView extends AppTemplate{


    renderBody(){
        return <TodoListViewComponent />
    }

    renderFooterButtons(){
        return (
            <TouchableHighlight onPress={this.addListButtonClick.bind(this)}>
                <Image style={AllListsViewStyle.plusButton}  source={(require('../../assets/images/plus_icon.png'))} />
            </TouchableHighlight>
        )
    }

    getTitle(){
        return this.props.item.text;
    }


    addListButtonClick(){
        this.props.navigator.ref.push({id:'CreateListItemView',
            view:<CreateTodoListItemView toastMethod={this.props.toastMethod} navigator={{ref:undefined}} />});
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

