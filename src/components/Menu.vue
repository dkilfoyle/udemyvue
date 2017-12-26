<template lang="pug">
  div
    .layout-padding
      .row.lg-gutter
        .col
          table.q-table.horizontal-separator.bordered
            thead
              tr
                th Size
                th Price
                th Add to basket
            tbody(v-for="item in getMenuItems")
              tr
                td
                  strong {{ item.name }}
              tr(v-for="option in item.options")
                td {{ option.size }}
                td {{ option.price }}
                td
                  q-btn(small @click="addToBasket(item, option)") +
        .col
          div(v-if="basket.length > 0")
            table.q-table.horizontal-separator.bordered.full-width
              thead
                tr
                  th Quantity
                  th Item
                  th Total
              tbody(v-for="item in basket")
                tr
                  td 
                    q-btn(@click="decreaseQuantity(item)" small) -
                    span {{ item.quantity }}-
                    q-btn(@click="increaseQuantity(item)" small) +
                  td {{ item.name }} {{ item.size }}
                  td {{ item.price * item.quantity }}
            p Order Total
            q-btn(@click="placeOrder()" color="primary").full-width Place Order
          p(v-else) {{ basketText }}
</template>

<script>
import {
  QBtn
} from 'quasar'
export default {
  name: 'pmenu',
  components: {
    QBtn
  },
  data () {
    return {
      basket: [],
      basketText: 'Your basket is empty'
    }
  },
  computed: {
    // getMenuItems () { return this.$store.state.menuItems }
    getMenuItems () { return this.$store.getters.getMenuItems }
  },
  methods: {
    addToBasket (item, option) {
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    increaseQuantity (item) {
      item.quantity++
    },
    decreaseQuantity (item) {
      item.quantity--
      if (item.quantity === 0) {
        this.removeFromBasket(item)
      }
    },
    removeFromBasket (item) {
      this.basket.splice(this.basket.indexOf(item), 1)
    },
    placeOrder () {
      this.$store.commit('addOrder', this.basket)
      this.basket = []
      this.basketText = 'Thank you, your order has been placed'
    }
  }
}
</script>

<style>
  thead {
    background-color: lightgrey
  }
</style>
