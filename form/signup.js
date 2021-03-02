<script>
  var firebaseConfig = {
    apiKey: "AIzaSyBiNmmwIPU2E6AGoxbA1k7fFQ5mYVgY0_c",
    authDomain: "form-12b09.firebaseapp.com",
    projectId: "form-12b09",
    storageBucket: "form-12b09.appspot.com",
    messagingSenderId: "10381870314",
    appId: "1:10381870314:web:04e8392c58b0553e7ec393"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

function signup () {

var email = document.getElementById ("email");
var passw = document.getElementById ("passw");
const promise = auth.createUserWithEmailAndPassword(email.value , passw.value);
promise.catch(e => alert(e.message));

alert("You Successfully Signed Up");
}
</script>