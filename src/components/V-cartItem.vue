<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require('@/assets/img/' + cart_item_data.image)" alt="img">
    <div class="cart-item__info">
      <p> {{ cart_item_data.name }} </p>
      <p> {{ cart_item_data.price }} </p>
      <p> {{ cart_item_data.id }} </p>
    </div>
    <div class="cart-item__quantity">
      <p>Q-ty:</p>
      {{ cart_item_data.quantity }} 
    </div>
    <button 
      class="delete"
      @click="deleteFromCart"
    > DELETE </button>
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
    this.cart_item_data.quantity = 1
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
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
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding * 2;
    margin: $margin * 2;
    &__image {
      max-width: 50px;
    }
  }
</style>