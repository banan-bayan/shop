<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require('@/assets/img/' + cart_item_data.image)" alt="img">
    <div class="cart-item__info">
      <p class="cart-item__name"> {{ cart_item_data.name }} </p>
      <div class="cart-item__quantity">
      <span 
        class="cart-item__quantity-decrement"
        @click="decrementItem"
      > - </span>

        {{ cart_item_data.quantity }} 

      <span
        class="cart-item__quantity-increment"
        @click="incrementItem"
      > + </span>
    </div>
  <!--  <button class="cart-item__quantity-delete" @click="deleteFromCart"></button>  -->
  
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
  mounted() {
    
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    decrementItem() {

    },
    incrementItem() {

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
 // box-shadow: 0 0 8px 0 #e0e0e0;
 // border: 1px solid slateblue;
  width: 50%;
  height: 450px;
  //padding: $padding * 2;
  margin-bottom: $margin * 5;
  &__image {
    margin-right: 5%;
    border: 5px solid white;
   // margin-bottom: 5%;
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
   // border: 1px solid black;
  // margin-bottom: 5%;
  }
  &__name {
    margin: 0;
    margin-bottom: auto;
    text-align: start;
  //  border: 1px solid green;
    font-size: 26px;
    font-weight: 700;
    font-family: "Raleway";
  //  margin-bottom: 100px;
  }
  &__quantity {
   // margin-bottom: 20px;
    display: flex;
   // align-self: flex-end;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-radius: 2px;
    //border: 2px solid grey;
    width: 150px;
    height: 30px;
    font-size: 22px;
    &-increment {
      font-size: 22px;
      
    //  border: 1px solid purple;
    }
    &-decrement {
    //  margin-bottom: 28px;
      align-self: flex-start;
      font-size: 22px;

    //  border: 1px solid skyblue;
    }
  //  &-delete {
   //   font-size: 20px;
   //   border: 1px solid yellowgreen;
   //   font-family: "Raleway";
   // }
  }
  &__price {
  // border: 1px solid blue;
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