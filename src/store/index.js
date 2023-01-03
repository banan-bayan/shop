import { createStore } from 'vuex';
import  Axios from 'axios';

// глобальное хранилище
export default createStore({
// тут хранятся обЪекты массивы коллекции переменные и тд
  state: {
    products: [],
    cart: []
  },

// короткий путь для данных из state
  getters: {
    PRODUCTS(state) {
      return state.products
    }, 
    CART(state) { 
      return state.cart 
    },
  },

// тут меняются состояния из state
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => state.products = products,

    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(item => {
          (item.id === product.id) ?
          (isProductExists = true, item.quantity++) : 
          (isProductExists = false);
        });
        if (!isProductExists) {
          state.cart.push(product);
        }   
      } else (state.cart.push(product));
    },

    REMOVE_FROM_CART: (state, index) => state.cart.splice(index, 1),
  },


// для ассинххронных действий
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
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index ) {
      commit('REMOVE_FROM_CART', index)
    } 
  },

  modules: {
  }
}) 