/**
 * Created by victor on 4/6/17.
 */

import React,{Component} from 'react';
import {Text} from 'react-native';
import {Form,Item,Input,Button} from 'native-base';
import * as ListService from '../services/ListService';

export default class TodoItemForm extends Component{

    constructor(args){
        super(args);
        this.state = {
            text:''
        }
    }


    render(){
        return(
            <Form>
               <Item>
                    <Input placeholder="Todo item name"
                           value={this.state.text}
                           onChangeText={(text) => this.setState({text})} />
               </Item>
                <Button onPress={this.addItem.bind(this)} block style={{marginHorizontal:5}}>
                    <Text>Add new item</Text>
                </Button>
            </Form>
        )
    }

    addItem(){
        ListService.addListItem(this.props.user,this.props.list,this.state.text,function(error){
            if(error){
                this.props.toastMethod(error);
            }
            else{
                this.props.toastMethod('Item added');
                this.props.navigator.ref.pop()
            }
        }.bind(this))
    }

}

TodoItemForm.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    toastMethod: React.PropTypes.func.isRequired,
    user: React.PropTypes.string.isRequired,
    list: React.PropTypes.string.isRequired
};