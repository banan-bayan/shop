<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart' , params: {cart_data: CART}}"> <!--    :to="{name: 'cart' , params: {cart_data: CART}}"  -->
      <div class="v-catalog__link-to-cart">  CART: {{CART.length}}  </div>
    </router-link>
    <h1 class="v-catalog__h1">Catalog</h1>
    <div class="v-catalog__list">
      <catalogItem 
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import catalogItem from "@/components/V-catalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'catalog',
  components: {catalogItem,},
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) =>  response.data ? console.log('ooo right') : console.log('ooo nooooou'))
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
<style lang="scss" scoped>
  $color-1: teal;
  $padding: 8px;
  $margin: 8px;
  .v-catalog {
    &__list {
      color: $color-1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__h1 {
      margin-top: $margin * 10
    }
    &__link-to-cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: 1px solid grey;
    }
  }
</style>