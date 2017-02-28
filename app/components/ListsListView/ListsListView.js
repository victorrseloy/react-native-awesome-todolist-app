import React,{Component} from 'react'
import {StyleSheet,ListView,Text,View} from 'react-native'
import {Spinner} from 'native-base'
import * as FireBaseService from '../../services/FireBaseService';
import * as ListService from '../../services/ListService';
import ListsListItem from './ListsListItem'


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
        if(this.state.loaded){
            return  <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        }
        else{
            return <View style={{marginTop:100,flexDirection:'column',justifyContent:'center'}}>
                        <Spinner color='blue' />
                    </View>
        }

    }

    renderRow(rowData){
        return <ListsListItem toastMethod={this.props.toastMethod} navigator={{ref:this.props.navigator.ref}} item={rowData} />
    }

    loadData(){
        ListService.loadLists(this.state.user,function(snapshot) {
            let list = [];
            snapshot.forEach(function(data){
                list.push({uid:data.getKey(),text:data.A.B.toString()});
            });
            console.log(list);
            this.setState({
                dataSource: ds.cloneWithRows(list),
                loaded:true
            });
        }.bind(this));


    }
}

