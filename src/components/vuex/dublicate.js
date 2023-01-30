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



/*

"advices": [
  {   
    "image": "11.jpg",
    "category": "Монстеры",
    "name": "Монстера Адансона",
    "id": "12"
  },
  {   
    "image": "10.jpg",
    "category": "Суккуленты",
    "name": "Флорариум",
    "id": "13"
  },
  {   
    "image": "7.jpg",
    "category": "Фикусы",
    "name": "Фикус Эластика",
    "id": "14"
  },
  {
    "image": "3.jpeg",
    "category": "Суккуленты",
    "name": "Алоэ Вера",
    "id": "15"
  }
]

*/