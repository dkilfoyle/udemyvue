<template lang="pug">
  q-btn(@click="goToMenu") Let's Order
</template>

<script>
import { QBtn } from 'quasar'
export default {
  components: { QBtn },
  methods: {
    goToMenu () {
      this.$router.push('/menu')
    }
  }
}
</script>
