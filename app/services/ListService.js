import * as firebase from "firebase";

export function loadLists(user,callback){
    firebase.database().ref('user/'+user+'/list').on('value',callback);
}

export function addList(user,list,callback){
    firebase.database().ref('user/'+user+'/list').push().set(list,callback);
}

export function deleteList(user,list){
    console.log("called "+'user/'+user+'/list/'+list);
    firebase.database().ref('user/'+user+'/list/'+list).remove()
}

export function updateList(user,list,text,callback){
    firebase.database().ref('user/'+user+'/list/'+list).set(text,callback);
}