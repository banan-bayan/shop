<template>
  <div class="catalog-item">
    <p>CatalogItem</p>
    <p>Price 100$</p>
    <button>Add stuff</button>
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