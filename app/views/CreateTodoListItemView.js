/**
 * Created by victor on 4/6/17.
 */
import React,{Component} from 'react'
import {ListView,Text} from 'react-native'

import AppTemplate from '../components/AppTemplate'
import TodoItemForm from '../components/TodoItemForm'


export default class CreateTodoListItemView extends AppTemplate{

    renderBody(){
        return (<TodoItemForm toastMethod={this.props.toastMethod}  navigator={{ref:this.props.navigator.ref}} />);
    }

    getTitle(){
        return 'Create new item';
    }

}
