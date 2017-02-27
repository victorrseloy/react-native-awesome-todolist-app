import * as firebase from "firebase";

export function loadLists(user,callback){
    firebase.database().ref('user/'+user+'/list').on('value',callback);
}

export function addList(user,list,callback){
    firebase.database().ref('user/'+user+'/list').push().set(list,callback);
}