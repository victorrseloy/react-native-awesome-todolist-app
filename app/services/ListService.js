import * as firebase from "firebase";

export function loadLists(user,callback){
    firebase.database().ref('user/'+user+'/list').on('value',callback);
}

export function addList(user,list,callback){
    firebase.database().ref('user/'+user+'/list').push().set(list,callback);
}

export function deleteList(user,list){
    firebase.database().ref('user/'+user+'/list/'+list).remove()
}

export function updateList(user,list,text,callback){
    firebase.database().ref('user/'+user+'/list/'+list).set(text,callback);
}

export function loadListItems(owner,list,callback){
    firebase.database().ref('user/'+owner+'/list/'+list).on('value',callback);
}

export function addListItem(owner,list,item,callback){
    firebase.database().ref('user/'+owner+'/list/'+list).push().set(item,callback);
}

export function deleteListItem(owner,list,item){
    firebase.database().ref('user/'+owner+'/list/'+list+'/item').remove();
}

export function addUpdateListItem(owner,list,item,callback){
    firebase.database().ref('user/'+owner+'/list/'+list+'/'+item).push().set(item,callback);
}