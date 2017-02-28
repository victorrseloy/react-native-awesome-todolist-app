import React,{Component} from 'react'
import {ListView,Text} from 'react-native'
import {Card,CardItem,Body} from 'native-base'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TodoListViewComponent extends Component{

    constructor(args){
        super(args);

        this.state ={
            items: ds.cloneWithRows(["abc","asdfadsf","fdfdf","fdfadf","adsfad","eee","rr","qerq"])
        }
    }

    render(){
        return <ListView dataSource={this.state.items} renderRow={this.renderRow.bind(this)}/>
    }

    renderRow(rowData){
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {rowData}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}