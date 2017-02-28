import React,{Component} from 'react'
import {Card,CardItem,Body} from 'native-base'
import {Text,TouchableHighlight,Image,View,Alert} from 'react-native'
import * as ListService from '../../services/ListService'
import * as FireBaseService from '../../services/FireBaseService'


export default class ListsListItem extends Component{


    render(){
        return (
            <Card style={{marginHorizontal:5}}>
                <CardItem>
                    <Body style={ListsListItemStyles.card}>
                    <Text style={ListsListItemStyles.listName}>
                        {this.props.item.text}
                    </Text>
                    <View>
                        <TouchableHighlight onPress={this.askForConfirmationToDelete.bind(this)}>
                            <Image style={ListsListItemStyles.deleteIcon} source={require('../../../assets/images/ic_delete_forever.png')}/>
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

}

const ListsListItemStyles ={
    card:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    listName:{
        fontSize:20
    },
    deleteIcon:{
        width:35,
        height:35,
        justifyContent:'flex-end'
    }
}