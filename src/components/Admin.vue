<template lang="pug">
  div
    .layout-padding
      .row.md-gutter
        .col
          new-pizza
        .col
          h4 Menu:
          table.q-table.bordered.full-width
            thead
              tr
                td Item
                td Remove from menu
            tbody(v-for = "item in getMenuItems")
              tr
                td {{ item.name }}
                td 
                  q-btn(small) x
      .row
        .col-12
          h4 Current Orders: {{ numberOfOrders }}
          table.q-table.bordered.horizontal-separator
            thead
              tr
                td Item
                td Size
                td Quantity
                td Price
            tbody
              tr.order-number
                td
                  strong Order Number: 1
                  q-btn(small) x
              tr
                td Margherita
                td 9"
                td 1
                td $7.00
      .row
        .col-12
          hr
          login

</template>

<script>
import { QBtn } from 'quasar'
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
export default {
  name: 'admin',
  components: {
    QBtn,
    NewPizza,
    Login
  },
  computed: {
    getMenuItems () { return this.$store.state.menuItems },
    numberOfOrders () { return this.$store.getters.numberOfOrders }
  }
}
</script>

