import React,{Component} from 'react'
import {StyleSheet,ListView,Text} from 'react-native'
import {Card,CardItem,Body,CheckBox} from 'native-base'


/**
 * This component renders the list of lists that user have
 */
export default class ListsListView extends Component{
    constructor(args){
        super(args);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['My TasK 1', 'SUPERMARKET LIST','ANIVERSARY LIST',
                'LORE IMPSUM SIT DOLLOR AMET','NEW TASK','My TasK 1', 'SUPERMARKET LIST','ANIVERSARY LIST',
                'LORE IMPSUM SIT DOLLOR AMET','NEW TASK','My TasK 1', 'SUPERMARKET LIST','ANIVERSARY LIST',
                'LORE IMPSUM SIT DOLLOR AMET','NEW TASK','My TasK 1', 'SUPERMARKET LIST','ANIVERSARY LIST',
                'LORE IMPSUM SIT DOLLOR AMET','NEW TASK']),
        };
    }

    render(){
        return  <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
    }

    renderRow(rowData){
        return <Card style={{marginHorizontal:5}}>
                    <CardItem>
                        <Body style={ListsListViewStyles.card}>
                            <CheckBox checked={false} />
                            <Text style={{marginLeft:20}}>
                                {rowData}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
    }
}

var ListsListViewStyles ={
    card:{
        flexDirection:'row'
    }
}