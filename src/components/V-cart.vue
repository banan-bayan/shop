<template>
  <headerShop />
  <div class="cart__background-image"></div>
  <div class="cart">
    <p class="cart__length-items"> <b class="cart__cart">Корзина</b> ( {{  CART.length }} ) </p>
    <p v-if="!CART.length"> There are no product in cart </p>
    <cartItem
      v-for="(item, index) in CART"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)" 
    />
    <div class="cart__total">
      <h3 class="order-summary">Итог заказа</h3>
      <p class="total-cost">
        <p class="total-cost-text"> Промежуточный итог </p>
        <p class="total-cost-price"> {{ cartTotalCost }} &#8381 </p>
      </p>
      <form>
        <input 
          class="cart__input" 
          type="text" 
          placeholder="Введите промо код"
        >
      </form>
      <div class="total-cost-finaly">
        <p class="total-cost-finaly-text"> Общее </p>
        <p class="total-cost-finaly-price"> {{ cartTotalCost  }} &#8381 </p>
      </div>

      <div class="nds"> 
        <p class="nds-text"> Из них НДС </p>   
        <p class="nds-cost"> {{  cartTotalCost * NDS }} &#8381 </p> 
      </div>
      
      <button class="cart__button-ordering"> ОФОРМИТЬ ЗАКАЗ </button>
    </div>
  </div>
  <footerComponent />
</template>

<script>
import headerShop from "@/components/V-headerShop.vue"; 
import cartItem from "@/components/V-cartItem.vue";
import footerComponent from "@/components/V-footer.vue";
import { mapActions, mapGetters} from "vuex";
export default {
  name: 'cart',
  data() {
    return {
      NDS: 0.2
    }
  },
  components: {cartItem, headerShop, footerComponent},
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
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

.cart {
  margin-left: 50px;
  min-height: 1000px;
  &__button-ordering {
    background: #333434;
    color: white;
    font-size: 20px;
    font-family: 'Raleway';
    font-weight: 700;
    border-radius: 10px;
    height: 60px;
    width: 80%;
    margin-top: 80px;
  }
  &__background-image {
    padding: 0;
    margin-bottom: 30px;
    width: 100%;
    background-image: url(@/assets/img/bigCart.jpg);
    height: 290px;
  }
  &__total {
    border-radius: 15px;
    background: white;
    border: 2px solid rgb(225, 223, 223);
    width: 30%;
    height: 600px;
    color: rgb(47, 47, 47);
    font-size: 40px;
    -webkit-box-shadow: 0px -1px 17px -8px rgb(85, 85, 85) inset;
    -moz-box-shadow: 0px -1px 17px -8px rgb(85, 85, 85)inset;
    box-shadow: 0px -1px 17px -8px rgb(85, 85, 85) inset;
    position: absolute;
    bottom: -500px;
    right: 20px;
    margin-left: auto;
  }
  &__length-items {
    font-size: 40px;
    color: grey;
    text-align: start;
    margin-bottom: 30px;
    font-family: 'Roboto';
    letter-spacing: 2px;
  }
  &__cart {
    color: rgb(0, 0, 0);
    letter-spacing: 5px;
  }
  &__input {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 30px;
    width: 60%;
    height: 60px;
    font-size: 28px;
    font-family: 'Raleway';
    color: black;
    background: white;
    -webkit-box-shadow: 0px -1px 17px -8px rgba(2, 2, 2, 0.67) inset;
    -moz-box-shadow: 0px -1px 17px -8px rgba(2, 2, 2, 0.67) inset;
    box-shadow: 0px -1px 17px -8px rgba(2, 2, 2, 0.67) inset;
    border-radius: 8px;
    padding-bottom: 10px;
    padding-left: 10px;
    &::placeholder {
      color: black;
      font-size: .8rem;
      font-family: 'Raleway'; 
    }
  }
}
.total-cost {
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-family: 'Raleway';
  &-text {
    margin-right: auto;
  }
  &-price {
    margin-left: auto;
    margin-right: 20px;
    font-family: 'Roboto';
  }
}
.total-cost-finaly {
  font-size: 20px;
  display: flex;
  font-family: 'Raleway';
  margin-bottom: 20px;
  margin-left: 60px;
  &-text {
    margin-right: auto;
  }
  &-price {
    font-family: 'Roboto';
    margin-left: auto;
    margin-right: 20px;
  }
}
.nds {
  color: grey;
  font-size: 12px;
  font-family: 'Raleway';
  display: flex;
  &-text {
    margin-right: auto;
    margin-left: 60px;
  }
  &-cost {
    font-family: 'Roboto';
    margin-left: auto;
    margin-right: 20px;
  }
}
.order-summary {
  font-size: 36px;
  font-family: 'Raleway';
  margin: 20px 20px;
  letter-spacing: 2px;
  text-align: start;
}
@media (max-width: 768px) {
  .cart {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    &__total {
    border-radius: 5%;
    background: white;
    border: 2px solid rgb(225, 223, 223);
    width: 100%;
    margin: 10px;
    color: rgb(47, 47, 47);
    -webkit-box-shadow: 0px -1px 17px -8px rgb(85, 85, 85) inset;
    -moz-box-shadow: 0px -1px 17px -8px rgb(85, 85, 85)inset;
    box-shadow: 0px -1px 17px -8px rgb(85, 85, 85) inset;
    position: sticky;
    top: 0;
    right: 20px;
    }
    &__background-image {
     padding: 0;
     margin-bottom: 30px;
     width: 100%;
     background-image: url(@/assets/img/bigCart.jpg);
     height: 190px;
    }
  }
}

</style>