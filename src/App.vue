<template>
    <div id="app" class="container">
        <!-- navigation goes here -->
        <nav>
            
            <ul class="nav nav-pills" >
                <!-- <li role="presentation" v-for="item in menuItems">
                    <a href="#">{{item}}</a>
                </li> -->
                <li role="presentation" >
                    <a href="/login">Login</a>
                </li>
                <li role="presentation">
                    <a href="/register">Register</a>
                </li>
            </ul>

        </nav>
                <router-view></router-view>
    
    </div>
</template>




<script>
import Firebase from 'firebase';
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'


//Initialize Firebase
let config = {
    apiKey: "AIzaSyAVgLOid9p5imE9eUhh3DdQEoe41HaySgw",
    authDomain: "sdp-journal.firebaseapp.com",
    databaseURL: "https://sdp-journal.firebaseio.com",
    projectId: "sdp-journal",
    storageBucket: "sdp-journal.appspot.com",
    messagingSenderId: "893885529357"
}
let app = Firebase.initializeApp(config);


let db = app.database();
let journalsRef = db.ref('journals');

export default {
    name: 'app',
    firebase: {
        journals: journalsRef
    },
    components: {
        login: 'Login',
        register: 'Register'
    },
    data: {
        auth: {
            user: null,
            email: '',
            password: '',
            message: '',
            userName: '',
            hasErrors: false
        }
    },
    data () {
        return {
            menuItems: ['Register', 'Login']
        }
    },
    computed: {
        menuItems() {
            if(this.userIsAuthenticated) {
                //do something after logged in
                console.log("You are logged in")
            }
        },
        userIsAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
    }
    
}

</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
