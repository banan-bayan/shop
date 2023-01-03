<template>
  <div class="cart">
    <div> CART </div>
    <router-link :to="{name: 'catalog'}">
      <div class="cart__link-to-catalog"> BACK </div>
    </router-link>
    <p v-if="!cart_data.length"> There are no product in cart </p> <!--     -->
    <cartItem 
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import cartItem from "@/components/V-cartItem.vue";
import { mapActions} from "vuex";
export default {
  name: 'cart',
  components: {cartItem},
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  },
}
</script>

<style lang="scss">
  $padding: 8px;

  .cart__link-to-catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid grey;
    padding: $padding * 2;
  }
</style>