<template lang="pug">
  div
    .row
      div
        p Logged in as: {{ currentUser }}
    .row
      form
        q-field(label="Email address")
          q-input(type="email" v-model="email")
        q-field(label="Password")
          q-input(type="password" v-model="password")
        q-btn(color="primary" @click.prevent="signIn") Sign in
        q-btn(color="negative" @click.prevent="signOut") Sign out
</template>

<script>
import { QBtn, QField, QInput } from 'quasar'

import Firebase from 'firebase'
import { store } from '../store/store.js'
Firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch('setUser', user)
  }
  else {
    store.dispatch('setUser', null)
  }
})

export default {
  components: {
    QBtn, QField, QInput
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },
  methods: {
    signIn () {
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
        var errorCode = error.error
        var errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password')
        }
        else {
          alert(errorMessage)
        }
      })
    },
    signOut () {
      Firebase.auth().signOut().then(function () {
        alert('logged out')
      })
    }
  }
}
</script>

<style lang="stylus">
.q-btn
  margin 5px
</style>