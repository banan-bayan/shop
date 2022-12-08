<template>
  <div class="v-wrapper">
    {{ title }}
    <Catalog />
    <Cart />
  </div>
</template>

<script>
import Catalog from "@/components/V-catalog.vue";
import Cart from "@/components/V-cart.vue";

export default {
  name: 'v-wrapper',
  components: {Catalog, Cart,},
  data() {
    return {
      title: 'Hello Vue'
    }
  }
}
</script>

<style lang="scss">
  .v-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 900px;
   margin: 0 auto;

  }
</style>