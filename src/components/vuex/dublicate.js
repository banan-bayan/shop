import { createStore } from 'vuex';
//import  Axios from 'axios';

// createStore - это хранилище
export default createStore({


  // state - сюда передаются данные ,
  // массивы обЬекты коллекции и т.д.
  state: {
    products: [],
    product: []
  },


  // mutations - здесь мутируют данные,
  // которые передаются в state.
  // mutation синнхронные !!!
  mutations: {},

  // actions ассинхронные!!!
  actions: {},


  // getters нужны чтобы передавать данные
  // коротким синтаксисом
  getters: {
    PRICE_PRODUCT(state) {
    return  product.price
    }
  },
   

  modules: {}
}) 

//import { mapGetters } from 'vuex';
//import { mapActions } from 'vuex';

//computed: ...mapGetters(['PRICE_PRODUCT'])
//methods:  ...mapActions(['FETCH_POSTS'])