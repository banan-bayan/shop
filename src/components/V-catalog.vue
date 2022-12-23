<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <CatalogItem 
      v-for="product in PRODUCTS"
      :key="product.id"
      :product_data="product"
      @sendId="showChildId"
      />
    </div>
  </div>
</template>
<script>
import CatalogItem from "@/components/V-catalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'catalog',
  components: {CatalogItem,},
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) =>  response.data ? console.log('ooo right') : console.log('ooo nooooou'))
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildId(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
$color-1: teal;
  .v-catalog {
    &__list {
      color: $color-1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>