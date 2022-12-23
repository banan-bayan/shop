import Vue from 'vue';
import { createStore } from 'vuex';
import  Axios from 'axios';

// глобальное хранилище
export default createStore({
// тут хранятся обЪекты массивы коллекции переменные и тд
  state: {
    products: []
  },

// короткий путь для данных из state
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },

// тут меняются состояния из state
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => state.products = products 
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
   }
},



  modules: {
  }
})
