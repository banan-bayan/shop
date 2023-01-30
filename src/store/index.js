import { createStore } from 'vuex';
import  Axios from 'axios';

// глобальное хранилище
export default createStore({
// тут хранятся обЪекты массивы коллекции переменные и тд
  state: {
    products: [],
    cart: [],
    isVisible: false,
    advices: []
  },

// короткий путь для данных из state
  getters: {
    PRODUCTS(state) {
      return state.products
    }, 
    CART(state) { 
      return state.cart 
    },
    DROP_MENU(state) {
      return state.isVisible
    },
    ADVICES(state) {
      return state.advices
    }
  },

// тут меняются состояния из state
  mutations: {
    TOGGLE_VISIBLE: (state) => state.isVisible = !state.isVisible,

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
    } 
  }
}) 