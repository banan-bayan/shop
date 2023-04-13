<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require('@/assets/img/' + cart_item_data.image)" alt="img">
    <div class="cart-item__info">
      <p class="cart-item__name"> {{ cart_item_data.name }} </p>
      <div class="cart-item__quantity">
      <span 
        class="cart-item__quantity-decrement"
        @click="incrementItem "
      > - </span>
        {{ cart_item_data.quantity }} 
      <span
        class="cart-item__quantity-increment"
        @click="decrementItem"
      > + </span>
    </div>
      <p class="cart-item__price"> {{ cart_item_data.price }} &#8381  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  data() {
    return {  
    }
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    }
  }
}
</script>

<style lang="scss">
  $radius: 4px;
  $padding: 8px;
  $margin: 8px;

.cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 50%;
  height: 450px;
  margin-bottom: $margin * 5;
  &__image {
    margin-right: 5%;
    border: 5px solid white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
    -moz-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
    box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
    width: 60%;
    height: 100%;
  }
  &__info {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    margin: 0;
    align-self: flex-start;
    padding: 0;
  }
  &__name {
    margin: 0;
    margin-bottom: auto;
    text-align: start;
    font-size: 26px;
    font-weight: 700;
    font-family: "Raleway";
  }
  &__quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-radius: 2px;
    width: 150px;
    height: 30px;
    font-size: 22px;
    &-increment {
      font-size: 22px;
      font-family: 'Roboto';
      cursor: pointer;
    }
    &-decrement {
      font-size: 32px;
      font-family: 'Roboto';
      cursor: pointer;
    }
  }
  &__price {
    font-size: 28px;
    font-family: "Roboto";
    text-align: start;
    margin: 0;
    margin-top: auto;
  }
}

@media (max-width: 768px) {
  .cart-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    
    margin: 10px;
    &__image {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    &__info {
      width: 100%;
    }
  }
}

</style>