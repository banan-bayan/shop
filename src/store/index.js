import { createStore } from 'vuex';
import  Axios from 'axios';

export default createStore({
  state: {
    products: [],
    cart: [],
    advices: []
  },

  getters: {
    PRODUCTS(state) {
      return state.products
    }, 
    CART(state) { 
      return state.cart 
    },
    ADVICES(state) {
      return state.advices
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => state.products = products,

    SET_ADVICES_TO_STATE: (state, advices) => state.advices = advices,

    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(item => {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        })
        if (!isProductExists)  state.cart.push(product);
      } else (state.cart.push(product));
    },

    REMOVE_FROM_CART: (state, index) => state.cart.splice(index, 1),

    INCREMENT : (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
      
    },
    DECREMENT: (state, index) => {
      state.cart[index].quantity++
    }
  },

  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return Axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
    },

    GET_ADVICES_DATA_FROM_API({commit}) {
      return Axios('http://localhost:3000/advices', {
        method: "GET"
      })
      .then((advices) => {
        commit('SET_ADVICES_TO_STATE', advices.data);
        return advices;
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index ) {
      commit('REMOVE_FROM_CART', index)
    },
    ICREMENT_CART_ITEM ({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM ({commit}, index) {
      commit('DECREMENT', index) 
    }
  }
}) 