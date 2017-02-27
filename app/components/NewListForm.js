import React,{Component} from 'react';
import  {Form,Item,Label,Input} from 'native-base';

export default class NewListForm extends Component{
    render(){
        return (
            <Form>
                <Item floatingLabel>
                    <Label>List Name</Label>
                    <Input />
                </Item>
            </Form>
        )
    }
}
