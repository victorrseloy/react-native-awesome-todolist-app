import React,{Component} from 'react'
import {StyleSheet,ListView,Text,View} from 'react-native'
import {Card,CardItem,Body,CheckBox,Spinner} from 'native-base'
import * as FireBaseService from '../services/FireBaseService';
import * as ListService from '../services/ListService';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
/**
 * This component renders the list of lists that user have
 */
export default class ListsListView extends Component{

    constructor(args){
        super(args);

        this.state = {
            dataSource: ds.cloneWithRows([]),
            user:FireBaseService.getCurrentUser().uid,
            loaded:false,
        };

        this.loadData();


    }

    render(){
        if(this.state .loaded){
            return  <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        }
        else{
            return <View style={{marginTop:100,flexDirection:'column',justifyContent:'center'}}>
                        <Spinner color='blue' />
                    </View>
        }

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

    loadData(){
        ListService.loadLists(this.state.user,function(snapshot) {
            let list = [];
            snapshot.forEach(function(data){
                list.push(data.A.B.toString());
            });
            console.log(list);
            this.setState({
                dataSource: ds.cloneWithRows(list),
                loaded:true
            });
        }.bind(this));


    }
}

var ListsListViewStyles ={
    card:{
        flexDirection:'row'
    }
}