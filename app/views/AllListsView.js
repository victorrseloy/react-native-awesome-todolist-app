import React,{Component} from 'react';
import ListsListView from '../components/ListsListView'
import AppTemplate from '../components/AppTemplate'
import CreateListView from '../views/CreateListView'


export default class AllListsView extends AppTemplate{




    renderBody(){

        return <ListsListView/>
    }


    createButtonClick(){
        this.props.navigator.ref.push({id:'CreateListView',view:<CreateListView toastMethod={this.showToast.bind(this)} navigator={{ref:undefined}} />});
    }

}

