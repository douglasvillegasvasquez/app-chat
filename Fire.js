import firebase from  'firebase'

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init =() => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDwebhi4XSvCHJPvsPPyOEfUqP7K-c8oeI",
                authDomain: "infocitypi.firebaseapp.com",
                databaseURL: "https://infocitypi.firebaseio.com",
                projectId: "infocitypi",
                storageBucket: "infocitypi.appspot.com",
                messagingSenderId: "642916285496",
                appId: "1:642916285496:web:d9b36e632a1d3b6f4f7acd"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) { 
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };
            
            this.db.push(message);
        });
    };
    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp);

        return(
            _id,
            createdAt,
            text,
            user
        );
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

       
    get db() {
        return firebase.database().ref("messages");
       
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();