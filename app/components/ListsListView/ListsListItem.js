import React,{Component} from 'react'
import {Card,CardItem,Body} from 'native-base'
import {Text,TouchableHighlight,Image,View,Alert} from 'react-native'
import * as ListService from '../../services/ListService'
import * as FireBaseService from '../../services/FireBaseService'
import CreateListView from '../../views/CreateListView'


export default class ListsListItem extends Component{


    render(){
        return (
            <Card style={{marginHorizontal:5}}>
                <CardItem>
                    <Body style={ListsListItemStyles.card}>
                    <Text style={ListsListItemStyles.listName}>
                        {this.props.item.text}
                    </Text>
                    <View style={ListsListItemStyles.actionContainer}>
                        <TouchableHighlight onPress={this.editItem.bind(this)}>
                            <Image style={ListsListItemStyles.icon} source={require('../../../assets/images/ic_mode_edit.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.askForConfirmationToDelete.bind(this)}>
                            <Image style={ListsListItemStyles.icon} source={require('../../../assets/images/ic_delete_forever.png')}/>
                        </TouchableHighlight>
                    </View>
                    </Body>
                </CardItem>
            </Card>
        )

    }

    askForConfirmationToDelete(){
        Alert.alert(
            'Please Confirm you want to delete',
            "Are you sure you want to delete the list '"+this.props.item.text+"' ?",
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: this.deleteList.bind(this)},
            ],
            { cancelable: false }
        )
    }

    deleteList(){
        console.log("will call");
        ListService.deleteList(FireBaseService.getCurrentUser().uid,this.props.item.uid);
    }

    editItem(){
        this.props.navigator.ref.push({id:'CreateListView',view:<CreateListView mode="EDIT"
                                                                                item={this.props.item}
                                                                                toastMethod={this.props.toastMethod}
                                                                                navigator={{ref:undefined}} />});
    }



}

const ListsListItemStyles ={
    card:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    actionContainer:{
        flexDirection:'row',
    },
    listName:{
        fontSize:20
    },
    icon:{
        width:35,
        height:35,
        justifyContent:'flex-end'
    }
}