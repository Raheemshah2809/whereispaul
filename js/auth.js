// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwJWudpcqz905QSERPZ1KN8kTIvn5QdBU",
    authDomain: "whereispaul-7e5fb.firebaseapp.com",
    databaseURL: "https://whereispaul-7e5fb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "whereispaul-7e5fb",
    storageBucket: "whereispaul-7e5fb.appspot.com",
    messagingSenderId: "46132357230",
    appId: "1:46132357230:web:1cae76e590e60830449e7f",
    measurementId: "G-GQWLQ6FHEL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
    console.log("signout");
};

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).
    then(() => {
            window.location.replace("Dashboard.html");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert.warning(errorMessage);
        });
};

const signOutButton = document.querySelector("#signout");

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        signOut();
    });
}