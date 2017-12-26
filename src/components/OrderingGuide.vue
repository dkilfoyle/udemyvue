<template lang="pug">
  q-card
    q-card-title How to order
    q-card-separator
    q-card-main
      p Address line 1
      p Address line 2
      p Phone Number
</template>

<script>
import { QCard, QCardTitle, QCardMain } from 'quasar'
export default {
  components: {
    QCard, QCardTitle, QCardMain
  }
}
</script>
