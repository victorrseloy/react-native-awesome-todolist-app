import firebase from 'firebase'


let isInitialized = false;

function initialize() {
    var config = {
        apiKey: "AIzaSyDIA1QivTS-L93YHqdxP80Di_ExKw-G29U",
        authDomain: "dont-forget-the-bread-b8c9f.firebaseapp.com",
        databaseURL: "https://dont-forget-the-bread-b8c9f.firebaseio.com",
        storageBucket: "dont-forget-the-bread-b8c9f.appspot.com",
        messagingSenderId: "374348216984"
    };
    firebase.initializeApp(config);
    isInitialized = true;
}

export function authWithFacebookToken(token,successCallBack){
    if(!isInitialized){
        initialize();
    }
    var credential = firebase.auth.FacebookAuthProvider.credential(token.toString());
    firebase.auth().signInWithCredential(credential).then(successCallBack, function(error) {
        console.log("Sign In Error", error);
    });

    return credential;
}

export function getCurrentUser(){
    return firebase.auth().currentUser;
}


