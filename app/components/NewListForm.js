import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
import  {Form,Item,Label,Input,Button} from 'native-base';
import * as FireBaseService from '../services/FireBaseService';
import * as ListService from '../services/ListService';


export default class NewListForm extends Component{

    constructor(args){
        super(args);
        let initialText = '';

        if(this.props.item){
            initialText = this.props.item.text;
        }

        this.state = {
            user:FireBaseService.getCurrentUser().uid,
            text: initialText
        };
    }

    render(){
        return (
            <Form>
                <Item floatingLabel>
                    <Input placeholder="List Name"
                           value={this.state.text}
                           onChangeText={(text) => this.setState({text})}  />
                </Item>
                <Button onPress={this.addList.bind(this)} block style={{marginHorizontal:5}}>
                    {(this.props.mode == "EDIT" &&<Text>Edit list</Text>)
                        || <Text>Create new list</Text>}
                </Button>
            </Form>
        )
    }

    addList(){
        if(this.props.mode == "EDIT"){
            ListService.updateList(this.state.user,this.props.item.uid,this.state.text,function(error){
                //TODO: check what to do if device is offline
                if(error){
                    console.log(error);
                }
                else{
                    console.log("Data successfully");
                    this.props.toastMethod("List Created");
                    this.props.navigator.ref.pop();
                }

            }.bind(this));
        }
        else{
            ListService.addList(this.state.user,this.state.text,function(error){
                //TODO: check what to do if device is offline
                if(error){
                    console.log(error);
                }
                else{
                    console.log("Data successfully");
                    this.props.toastMethod("List edited");
                    this.props.navigator.ref.pop();
                }

            }.bind(this));
        }

    }


}
