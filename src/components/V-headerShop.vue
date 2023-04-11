<template>
  <div class="header">
    <p class="header__logo">plant</p>
      <div class="header__menu">
        <router-link
          v-if="$route.path !== '/contacts'"
          class="header__menu-link-to-contacts" 
          :to="{name: 'contacts'}"
        >
          <div class="header__menu-contacts">
            Контакты
            <hr class="header__menu-contacts-hr header__menu-contacts-hr--hover">
          </div>
        </router-link>
        <router-link 
          v-if="$route.path !== '/advice'"
          class="header__menu-link-to-advice"
          :to="{name: 'advice'}"
        >
          <div class="header__menu-advice">
            Советы по уходу
            <hr class="header__menu-advice-hr header__menu-advice-hr--hover">
          </div>
        </router-link>
        <router-link 
          v-if="$route.path !== '/cart'"
          class="header__menu-link-to-order" 
          :to="{name: 'cart'}"
        >
          <div class="header__menu-order">
            Оплата и доставка
            <hr class="header__menu-order-hr header__menu-order-hr--hover">
          </div>
        </router-link>
        <router-link
          v-if="$route.path !== '/chat'"
          class="header__menu-link-to-chat" 
          :to="{name: 'chat'}"
        >
          <div class="header__menu-chat">
            Оставить отзыв
            <hr class="header__menu-chat-hr header__menu-chat-hr--hover">
          </div>
        </router-link>
        <router-link
          v-if="$route.path !== '/'"
          class="header__menu-link-to-catalog" 
          :to="{name: 'catalog'}">
          <div class="header__menu-catalog"> Каталог
            <hr class="header__menu-catalog-hr header__menu-catalog-hr--hover">
          </div>
        </router-link>
      </div>
      

      <div class="header__icons">
        <button @click="openclosemenu"><MenuSearch class="header__icons-search" /></button>
        
        <router-link :to="{name: 'contacts'}">
          <MenuContacts class="header__icons-contacts"/>
        </router-link>
        <router-link :to="{name: 'cart'}">
          <div class="header__icons-link-to-cart">
            <MenuCart />
          </div>
        </router-link>
      </div>
    </div>
</template> 

<script>
import MenuSearch from "@/components/icons/MenuSearch.vue";
import MenuContacts from "@/components/icons/MenuContacts.vue";
import MenuCart from "@/components/icons/MenuCart.vue";
import Burger from "@/components/icons/Burger.vue";
export default {
  components: {MenuSearch, MenuContacts, MenuCart, Burger},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: ['Контакты', 'Советы по уходу',  'Оплата и доставка',  'Оставить отзыв', 'Каталог'],
      show: true,
    }
  },
  methods: {
    openclosemenu() {
      this.$store.commit('TOGGLE_VISIBLE');
    }
  },
}
</script>

<style lang="scss">
  $padding: 5px;
  $margin: 8px;
  $color-1: black;
  $color-2: white;
  $color-3: grey;

.header-touch2 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
 &__content {
  margin: auto;
  background-color: $color-2;
  border-radius: 12px;
  min-height: 380px;
  min-width: 380px;
  padding: $padding * 2;
 }
}





.header__options-menu {
  border: 1px solid green;
}
.header__menu-links {
  text-decoration: none;
  color: $color-1;
}
.header-touch {
  display: none;
}

.header {
  background: $color-2;
  height: 120px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  &__logo {
    font-family: 'Mitr';
    font-size: 55px;
    color: #38603C;
    //margin-right: auto;
    margin-right: 20px;
    margin-left: 20px;
    border: 1px solid gold;
  }
  &__menu { 
    height: 49px;
    font-size: 20px;
    color: $color-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway';
    font-weight: 400;
    width: 50%;
    padding-left: $padding;
    padding-right: $padding;
    padding-top: $padding * 3;
    padding-bottom: $padding * 2;
    &-contacts {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-contacts-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-advice {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-advice-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-order {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-order-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-chat {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto; 
      } 
      &:hover .header__menu-chat-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      } 
    }
    &-catalog {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto; 
      } 
      &:hover .header__menu-catalog-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      } 
    }
    &-link-to-order {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-contacts {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-advice {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-chat {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-catalog {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
  }
  &__icons {
    min-width: 150px;
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
    height: 49px;
    margin-right: 20px;
    border: 1px solid black;
    ///////////////
    display: none;
    //////////////
    &-search {
      border: none;
      transition: all 0.2s ease 0s;
      border-radius: 3px;
      padding: 4px;
     &:hover {
       background: #ebeaea;
      }
    }
    &-contacts {
      border: none;
      transition: all 0.2s ease 0s;
      border-radius: 3px;
      padding: 4px;
      padding-left: 6px;
      padding-right: 6px;
      &:hover {
        background: #ebeaea;
      }
    }
    &-link-to-cart {
      margin-top: 3px;
      border: none;
      transition: all 0.2s ease 0s;
      border-radius: 3px;
      padding: 4px;
      &:hover {
        background: #ebeaea;
      }
    }
  }
}


@media (max-width: 768px) {
  .header {
    display: none;
  }
  .header-touch {
    display: flex;
    height: 100px;
    background: #38603C;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    &__menu {
      border: 1px solid red;
      width: 60px;
      font-size: 3em;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      color: $color-2;
      width: 1.5em;
    }
    &__clear {
      width: 60px;
      font-size: 3em;
      border: 1px solid red;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      color: $color-2;
      width: 1.5em;
    }
  }
  ul {
    align-self: flex-start;
    background: #eee;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 60px;
    width: 100%;
  }
  li {
    align-items: center;
    color: $color-1;
    cursor: pointer;
    display: flex;
    font-size: 1.5em;
    height: 2em;
    justify-content: center;
    list-style-type: none;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    &:hover {
      background-color: #585555;
      color: #AFFFEA;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.3s ease 0s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    
  }
}
</style>  