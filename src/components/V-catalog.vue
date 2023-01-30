<template>
  <div class="catalog">
    <headerShop />
    <div class="catalog__background-image">
      <div class="block">
        <div 
          class="isOpen"
          v-if="DROP_MENU"
          >ВЫ ХОТЕЛИ УЗНАТЬ ХОТЧЕТ ЛИ АНЯ КУШАТЬ ? ГЛУПЫЙ ВОПРОС, ИДИ ПОКОРМИ ЕЁ </div>
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
import headerShop from "@/components/V-headerShop.vue"
import MenuSearch from "@/components/icons/MenuSearch.vue";
import MenuContacts from "@/components/icons/MenuContacts.vue";
import MenuCart from "@/components/icons/MenuCart.vue";
import catalogItem from "@/components/V-catalogItem.vue";
import footerComponent from "@/components/V-footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
//  data() {
//    return {
//  arrNumbers: [1,2, 0, 3, 75, 4, 6, 8, 10, 12]
//    }
//  },
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

  .isOpen {
    right: 0;
    top: 50;
    position: absolute;
    color: black;
    font-size: 25px;
    font-weight: 700;
    height: 200px;
    width: 200px;
    border: 3px solid black;
    background: yellow;
  }
  
  
.catalog {
  margin: 0;
} 

.catalog__background-image {
  background-image: url(@/assets/img/big.jpg);
  width: 100%;
  color: $color-2;
  height: 600px;
  border: 2px solid darkblue
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