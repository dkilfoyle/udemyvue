<template lang="pug">
  form
    h4 Add new pizza:
    q-field(label="Name")
      q-input(v-model="newPizza.name")
    q-field(label="Description")
      q-input(type="textarea" :min-rows=3 v-model="newPizza.description")
    strong 
      q-field(label="Option 1:")
    q-field(label="Size")
      q-input(v-model="newPizza.options[0].size")
    q-field(label="Price")
      q-input(v-model="newPizza.options[0].price")
    strong
      q-field(label="Option 2:")
    q-field(label="Size")
      q-input(v-model="newPizza.options[1].size")
    q-field(label="Price")
      q-input(v-model="newPizza.options[1].price")
    q-field
    q-btn.full-width(color="primary" @click="addMenuItem") Add
</template>

<script>
import { dbMenuRef } from '../firebaseConfig'

import { QBtn, QField, QInput } from 'quasar'
export default {
  components: {
    QBtn, QField, QInput
  },
  data () {
    return {
      newPizza: {
        'name': 'Margherita',
        'description': 'A delicious tomatoa based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 6.95
        }, {
          'size': 12,
          'price': 10.95
        }]
      }
    }
  },
  methods: {
    addMenuItem () {
      dbMenuRef.push(this.newPizza)
    }
  }
}
</script>
