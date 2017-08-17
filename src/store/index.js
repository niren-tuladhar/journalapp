import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
            id: 'sdfkjksdf'
        } 
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUserUp ({commit}, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid
                        }
                        commit(setUser, newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }
                )
        },
        loginUser({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const existingUser = {
                            id: user.uid
                        }
                        commit(setUser, existingUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }
                )
        }
    }
})