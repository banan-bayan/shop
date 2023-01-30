<template>
  <headerShop />
  <div class="cart__background-image"></div>
  <div class="cart">
    
    <p v-if="!CART.length"> There are no product in cart </p>
    <cartItem 
      v-for="(item, index) in CART"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)" 
    />
    <div class="cart__total">
      <p class="total-cost"> TOTAL: {{ cartTotalCost }} $</p>
    </div>
  </div>
  <footerComponent />
</template>

<script>
import headerShop from "@/components/V-headerShop.vue"; 
import cartItem from "@/components/V-cartItem.vue";
import footerComponent from "@/components/V-footer.vue";
//import { ORDER_PRICE } from "@/Constants";
import { mapActions, mapGetters} from "vuex";
export default {
  name: 'cart',
  
  components: {cartItem, headerShop, footerComponent},
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log()
    },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost() {
      let ORDER_PRICE = [];
      if (this.CART.length) {
      this.CART.forEach((item) => ORDER_PRICE.push(item.price * item.quantity));
      ORDER_PRICE = Math.round(ORDER_PRICE.reduce((sum, el) =>  sum + el));
        return ORDER_PRICE
      } else  return 0
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
  $padding: 8px;
  $margin: 8px;
  
  .cart__background-image {
    padding: 0;
    margin: 0;
    border: solid 1px orangered;  
    width: 100%;
    background-image: url(@/assets/img/bigCart.jpg);
    height: 300px;
    
  }
  .cart {
    min-height: 2500px;
    border: solid 1px red;
    &__total {
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 60px;
      padding: $padding * 2;
      display: flex;
      justify-content: center;
    //  background: rgb(28, 220, 85);
      color: #fff;
      font-size: 20px;
      border: solid 1px orangered;   
    }
  }
  .total-cost {
    display: flex;
    align-items: center;
    margin: $margin * 2;
    padding-left: $padding;
    padding-right: $padding;
    border: solid 1px black;
    height: 40px;
    max-width: 380px;
  }

  
</style>