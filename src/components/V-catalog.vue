<template>
  <div class="catalog">
    <headerShop />
    <div class="catalog__background-image">
      <div class="catalog__block">
        <div class="catalog__block-title">
          <p>Цветы для</p>  
          <p>вашего дома</p>
        </div>
        <div class="catalog__block-text">
          <p>Растения в кашпо станут красивым и модным дополнением интерьера вашей</p> 
          <p>квартиры или офиса</p> 
        </div>
      </div>
    </div>
    <div class="catalog__list">
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
import headerShop from "@/components/V-headerShop.vue"
import MenuSearch from "@/components/icons/MenuSearch.vue";
import MenuContacts from "@/components/icons/MenuContacts.vue";
import MenuCart from "@/components/icons/MenuCart.vue";
import catalogItem from "@/components/V-catalogItem.vue";
import footerComponent from "@/components/V-footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {

  name: 'catalog',
  components: {headerShop, catalogItem, MenuSearch, MenuContacts, MenuCart, footerComponent,},
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'DROP_MENU'
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
  font-family: 'Raleway';
  margin: 0;
  &__background-image {
    background-image: url(@/assets/img/big.jpg);
    background-position: right;
    background-repeat: no-repeat;
    width: 100%;
    color: $color-2;
    height: 500px;
    margin-bottom: 30px;
  }
  &__block {
    padding-left: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: $color-1;
    &-title {
      margin-right: auto;
      font-size: 5rem;
      font-weight: 700;
      text-align: start;
    }
    &-text {
      text-align: start;
    }
  }
  &__list {
    margin-top: 20px;
    color: #545454;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
} 
@media (max-width: 1200px) {
  .catalog {
    max-width: 970px;
    &__background-image {
      height: 400px;
      background: url(@/assets/img/big.jpg);
      background-size: 60% 100%;
      background-position: right;
      background-repeat: no-repeat;
    }
    &__block {
      &-title {
      font-size: 4rem;
      }
      &-text {
        font-size: 16px;
        margin-bottom: 16px;
      }
    }
  }
}
@media(max-width: 992px) {
  .catalog {
    max-width: 750px;
    &__background-image {
      color: $color-2;
      height: 300px;
    }
    &__block {
      padding-left: 30px;
      &-title {
        margin-right: auto;
        font-size: 3rem;
      }
      &-text {
        margin-bottom: 16px;
        font-size: 14px;
      }
    }
  }
}
@media(max-width: 767px) {
  .catalog {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
    &__background-image {
      background-size: 90% 100%;
      width: 100%;
      height: 200px;
    }
    &__block {
      padding-left: 16%;
      &-title {
        font-size: 2rem;
        align-self: flex-start;
      }
      &-text {
        font-size: 10px;
      }
    }
  }
}
</style>