<template>
  <div class="catalog-item">
    <!--<img :src=" require('@/components/images/' + product_data.image)" alt="img">-->
    <div class="catalog-item__name"> {{ product_data.name }} </div>
    <div class="catalog-item__price"> {{ product_data.price }} </div>
    <button class="catalog-item__add-to-cart-btn btn">ADD TO CART</button>
  </div>
</template>

<script>
//import images from "@/components"
export default {
  //components: {images},
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
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
  }
</style>