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





/*


<div class="catalog">
<div class="header">
  <p class="header__logo">plant</p>
  <div class="header__menu">
    <router-link
      class="header__menu-link-to-contacts" 
      :to="{name: 'contacts'}"
    >
      <div class="header__menu-contacts">
        Контакты
        <hr class="header__menu-contacts-hr header__menu-contacts-hr--hover">
      </div>
    </router-link>
    <router-link 
      class="header__menu-link-to-advice"
      :to="{name: 'advice'}"
    >
      <div class="header__menu-advice">
        Советы по уходу
        <hr class="header__menu-advice-hr header__menu-advice-hr--hover">
      </div>
    </router-link>
    <router-link 
      class="header__menu-link-to-order" 
      :to="{name: 'cart'}"
    >
      <div class="header__menu-order">
        Оплата и доставка
        <hr class="header__menu-order-hr header__menu-order-hr--hover">
      </div>
    </router-link>
    <router-link
      class="header__menu-link-to-chat" 
      :to="{name: 'chat'}"
    >
      <div class="header__menu-chat">
        Оставить отзыв
        <hr class="header__menu-chat-hr header__menu-chat-hr--hover">
      </div>
    </router-link>
  </div>
  

  <div class="header__icons">
    <MenuSearch class="header__icons-search" />
    <router-link 
      :to="{name: 'contacts'}"
    >
      <MenuContacts class="header__icons-contacts"/>
    </router-link>
    <router-link :to="{name: 'cart'}">
      <div class="header__icons-link-to-cart">
        <MenuCart>
          {{ CART.length }} 
        </MenuCart> 
      </div>
    </router-link>
  </div>
</div>

*/