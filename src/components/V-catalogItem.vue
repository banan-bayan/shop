<template>
  
  <div class="catalog-item">
    <button 
      class="catalog-item__add-to-cart-btn btn" 
      @click="addToCart"
    >
      <img 
        class="catalog-item__image" 
        :src="require('@/assets/img/' + product_data.image)" alt="img"
      > 
    </button>
    <div class="catalog-item__info">
      <div class="item-category">
        {{ product_data.category }}
      </div>
      <div class="item-name"> 
        {{ product_data.name }} 
      </div>
    </div>
    <div class="catalog-item__price"> 
      Price {{ product_data.price }} $. 
    </div>
  </div>
    
    
    
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted() {
   this.product_data.quantity = 1;
  }
}
/*
<div class="catalog-item">
    <button 
      class="catalog-item__add-to-cart-btn btn" 
      @click="addToCart"
    >
      <img 
        class="catalog-item__image" 
        :src="require('@/assets/img/' + product_data.image)" alt="img"
      > 
    </button>
    <div class="catalog-item__info">
      <div class="item-category">
        {{ product_data.category }}
      </div>
      <div class="item-name"> 
        {{ product_data.name }} 
      </div>
    </div>
    <div class="catalog-item__price"> 
      Price {{ product_data.price }} $. 
    </div>
  </div>
    */
</script>

<style lang="scss">
$radius: 4px;
$margin: 8px;
$padding: 8px;

  .catalog-item {
    box-shadow: 0 0 8px 0 #e0e0e0;
    border-radius: $radius;
    border: 5px solid black;
    &__image {
      border: 5px solid red;
    }
    &__add-to-cart-btn {
      border: 5px solid green;
    }
   
  }
  .item-name, .item-category {
    margin: 0;
  }
</style>