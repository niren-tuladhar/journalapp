<template>
  <div id="app" class="row">
    <div class="page-header">
      <h1> Heading goes here </h1>
    </div>
    <div class="callout">
      <h2>Journals List</h2>
      <p>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Entry</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="journal in journals">
              <td>
                {{journal.title}}
              </td>
              <td>
                {{journal.entry}}
              </td>
              <td>
                {{journal.date}}
              </td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Firebase from 'firebase';

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
