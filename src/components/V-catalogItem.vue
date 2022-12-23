<template>
  <div class="catalog-item">
    <img 
      class="catalog-item__image" 
      :src="require('@/assets/img/' + product_data.image)" alt="img"
    > 
    <div class="catalog-item__name"> 
      {{ product_data.name }} 
    </div>
    <div class="catalog-item__price"> 
      Price {{ product_data.price }} руб. 
    </div>
    <button 
      class="catalog-item__add-to-cart-btn btn" 
      @click="sendDataToParent"
    >
      ADD TO CART
    </button>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  data() {
    return {
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit('sendId', this.product_data.id)
    }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$margin: 8px;
$padding: 8px;

  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border-radius: $radius;
    margin-bottom: $margin * 2;
    padding: $padding * 2;
    &__image {
      width: 100px;
    }
  }
</style>