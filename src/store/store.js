import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menuItems: {
      1: {
        'name': 'Margherita',
        'description': 'A delicious tomatoa based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 6.95
        }, {
          'size': 12,
          'price': 10.95
        }]
      },
      2: {
        'name': 'Pepperoni',
        'description': 'A delicious tomatoa based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      },
      3: {
        'name': 'Ham and Pineapple',
        'description': 'A delicious tomatoa based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      }
    },
    orders: [],
    currentUser: null
  },
  getters: {
    getMenuItems: state => state.menuItems,
    numberOfOrders: state => state.orders.length,
    getCurrentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, order) => state.orders.push(order),
    userStatus (state, user) {
      if (user) {
        state.currentUser = user.email
      }
      else {
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser (context, user) {
      context.commit('userStatus', user)
    }
  }
})
