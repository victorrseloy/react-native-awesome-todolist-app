import React,{Component} from 'react'

import AppTemplate from '../components/AppTemplate'
import NewListForm from '../components/NewListForm'

export default class CreateListView extends AppTemplate{

    renderBody(){
        return(
            <NewListForm/>
        )
    }
}
