<template lang="pug">
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

    }
  }
}
</script>

<style lang="stylus">
.q-btn
  margin 5px
</style>