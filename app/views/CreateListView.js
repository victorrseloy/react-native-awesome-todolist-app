import React,{Component} from 'react'

import AppTemplate from '../components/AppTemplate'
import NewListForm from '../components/NewListForm'



export default class CreateListView extends AppTemplate{

    renderBody(){

        return(
            <NewListForm item={this.props.item} mode={this.props.mode} toastMethod={this.props.toastMethod} navigator={{ref:this.props.navigator.ref}}/>
        )
    }

    getTitle(){
        return "Create New List";
    }
}
