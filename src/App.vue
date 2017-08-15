<template>
    <div id="app" class="container">
        <!-- navigation goes here -->
        <nav>
            
            <ul class="nav nav-pills" >
                <li role="presentation" v-for="item in menuItems">
                    <a href="#">{{item}}</a>
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
            menuItems: ['Home', 'Menu2']
        }
    },
    methods: {

        /**
         * Authenticate the user
         *
         * @param object event
         */
        login: function (event) {
            var vm = this;
            vm.auth.message = '';
            vm.auth.hasErrors = false;

            if (vm.auth.email === '' || vm.auth.password === '') {
                alert('Please provide the email and password');
                return;
            }
            // Sign-in the user with the email and password
            firebase.auth().signInWithEmailAndPassword(vm.auth.email, vm.auth.password)
                .then(function (data) {
                    vm.auth.user = firebase.auth().currentUser;
                }).catch(function (error) {
                    vm.auth.message = error.message;
                    vm.auth.hasErrors = true;
                });
        },

        /**
         * Create a new user account
         * 
         * @param object event
         */
        signUp: function (event) {
            var vm = this;
            vm.auth.message = '';
            vm.auth.hasErrors = false;

            if (vm.auth.email === '' || vm.auth.password === '') {
                alert('Please provide the email and password');
                return;
            }

            // Create a new user in firebase
            firebase.auth().createUserWithEmailAndPassword(vm.auth.email, vm.auth.password)
                .then(function (data) {
                    vm.auth.message = 'Successfully created user';
                    vm.auth.user = firebase.auth().currentUser;
                    vm.auth.email = '';
                    vm.auth.password = '';
                }).catch(function (error) {
                    vm.auth.message = error.message;
                    vm.auth.hasErrors = true;
                });
        },

        /**
         * Signout the currently logged-in user
         */
        signOut: function () {
            // Signout the user using firebase
            firebase.auth().signOut()
                .then(function (error) {
                    this.auth.user = firebase.auth().currentUser;
                    this.auth.message = 'User signed out Successfully';
                }.bind(this), function (error) {
                    alert('Failed to signout user, try again later');
                });
        },

        /**
         * Update the user profile details.
         */
        updateProfile: function () {
            if (this.auth.userName === '') {
                alert('Please provide a username to update.');
                return;
            }

            var user = firebase.auth().currentUser,
                vm = this;

            user.updateProfile({
                displayName: vm.auth.userName
            }).then(function () {
                vm.auth.message = 'Successfully udpated user profile.';
            }, function (error) {
                vm.auth.message = 'Failed to update user profile.';
                vm.auth.hasErrors = true;
            });
        },

        /**
         * Dismiss the alert message
         */
        dismissAlert: function () {
            this.auth.message = '';
            this.auth.hasErrors = false;
        },

        /**
         * Display name computed property
         */
        displayName: function () {
            return this.auth.user.displayName ?
                this.auth.user.displayName : this.auth.user.email;
        }

    },

    computed: {

        /**
         * Determines if the user is authenticated
         *
         * @return boolean
         */
        isAuthenticated: function () {
            // This function changes the auth.user state when 
            // the auth status of user changes.
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    this.auth.user = user;
                } else {
                    this.auth.user = null;
                }
            }.bind(this));

            return (this.auth.user !== null);
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
