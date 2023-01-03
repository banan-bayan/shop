<template>
  <div class="v-wrapper">
    <router-view />
  <!--  <Catalog /> -->
  <!--  <Cart   -->
  <!--    v-if="CART.length"  -->
  <!--    :cart_data="CART"  -->
  <!--  />  -->
  </div>
</template>

<script>
//import Catalog from "@/components/V-catalog.vue";
//import Cart from "@/components/V-cart.vue";
import { mapGetters,} from "vuex";
export default {
  name: 'v-wrapper',
  //components: {Catalog, Cart,},
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
  //  ...mapGetters([
  //   'CART'
  //  ])
  }
}
</script>

<style lang="scss">
  .v-wrapper {
   max-width: 900px;
   margin: 0 auto;

  }
</style>