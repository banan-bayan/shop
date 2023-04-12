import { createStore } from 'vuex';
//import  Axios from 'axios';

// createStore - это хранилище
export default createStore({


  // state - сюда передаются данные ,
  // массивы обЬекты коллекции и т.д.
  state: {
    products: [],
    product: [],
   
  },


  // mutations - здесь мутируют данные,
  // которые передаются в state.
  // mutation синнхронные !!!
  mutations: {
   
  },

  // actions ассинхронные!!!
  actions: {
   
  },


  // getters нужны чтобы передавать данные
  // коротким синтаксисом
  getters: {
  
  },
   

  modules: {}
}) 

