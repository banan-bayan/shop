<template>
  <div class="catalog">
    <div class="header">
      <p class="header__logo">plant</p>
      <div class="header__menu">
        <div class="header__menu-contacts">
          Контакты
          <hr class="header__menu-contacts-hr header__menu-contacts-hr--hover">
        </div>
        <div class="header__menu-advice">
          Советы по уходу
          <hr class="header__menu-advice-hr header__menu-advice-hr--hover">
        </div>
        <router-link class="header__menu-link-to-order" :to="{name: 'cart'}">
          <div class="header__menu-order">
            Оплата и доставка
            <hr class="header__menu-order-hr header__menu-order-hr--hover">
          </div>
        </router-link>
      </div>
      

      <div class="header__icons">
        <MenuSearch class="header__icons-find" />
        <MenuContacts class="header__icons-contacts"/>

        <router-link :to="{name: 'cart'}">
          <div class="header__icons-link-to-cart">
            <MenuCart>
              {{ CART.length }} 
            </MenuCart> 
          </div>
        </router-link>
      </div>
    </div>
    <div class="background-image">
      <div class="block">
        <div class="block__title-1">Цветы для</div>
        <div class="block__title-2">вашего дома</div>
        <div class="block__text-1"> Растения в кашпо станут красивым и модным дополнением интерьера вашей</div>
        <div class="block__text-2"> квартиры или офиса</div>
      </div>
    </div>
    <div class="list">
      <catalogItem 
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
    <footer-component />
  </div>
</template>


<script>

import MenuSearch from "@/components/icons/MenuSearch.vue";
import MenuContacts from "@/components/icons/MenuContacts.vue";
import MenuCart from "@/components/icons/MenuCart.vue";
import catalogItem from "@/components/V-catalogItem.vue";
import footerComponent from "@/components/V-footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'catalog',
  components: {catalogItem,MenuSearch , MenuContacts, MenuCart, footerComponent,},
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) =>  response.data ? console.log('ooo right') : console.log('ooo nooooou'));
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
}
</script>
<style lang="scss">
  $padding: 5px;
  $margin: 8px;
  $color-1: black;
  $color-2: white;
  $color-3: grey;
  
.catalog {
  margin: 0;
} 
.header {
  background: $color-2;
  height: 120px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: $margin * 2;
  &__logo {
    font-family: 'Mitr';
    font-size: 48px;
    color: #38603C;
    margin-right: auto;
    margin-left: 20px;
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
    &-link-to-order {
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
    &-find {
      border: none;
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
.background-image {
  background-image: url(@/assets/img/big.jpg);
  width: 100%;
  color: $color-2;
  height: 600px;
}
.block {
  padding-top: 60px;
  padding-left: 100px;
  width: 50%;
  height: 55%;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  &__title-1 {
    margin-right: auto;
    font-size: 56px;
    color: $color-1;
    font-family: 'Raleway';
    font-weight: 700;
  }
  &__title-2 {
    margin-right: auto;
    font-size: 56px;
    color: $color-1;
    font-family: 'Raleway';
    font-weight: 700;
  }
  &__text-1 {
    color: $color-1;
    margin-top: auto;
    margin-bottom: 20px;
    margin-right: auto;
    font-family: 'Raleway';
  }
  &__text-2 {
    color: $color-1;
    margin-right: auto;
    font-family: 'Raleway';
  }
}
.list {
  margin-top: 20px;
  color: #545454;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}  
</style>