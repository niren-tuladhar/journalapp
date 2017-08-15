import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ],
    mode: 'history'
})