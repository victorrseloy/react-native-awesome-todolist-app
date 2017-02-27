import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
import  {Form,Item,Label,Input,Button} from 'native-base';
import * as FireBaseService from '../services/FireBaseService';
import * as ListService from '../services/ListService';


export default class NewListForm extends Component{

    constructor(){

        super();

        this.state = {
            user:FireBaseService.getCurrentUser().uid,
            inputText:''
        };
    }

    render(){
        return (
            <Form>
                <Item floatingLabel>
                    <Label>List Name</Label>
                    <Input onChangeText={(text)=> this.state.inputText = text}  />
                </Item>
                <Button onPress={this.addList.bind(this)} block style={{marginHorizontal:5}}>
                    <Text>Create new list</Text>
                </Button>
            </Form>
        )
    }

    addList(){
        ListService.addList(this.state.user,this.state.inputText,function(error){
            // Callback comes here
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


}
