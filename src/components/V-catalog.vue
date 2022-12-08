<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <CatalogItem 
      v-for="product in products"
      :key="product.id"
      :product_data="product"
      />
    </div>
  </div>
</template>
<script>
import CatalogItem from "@/components/V-catalogItem.vue";
export default {
  name: 'catalog',
  components: {CatalogItem,},
  data() {
    return {
      products: [
        {
        id: 1,
        image: "1.jpg",
        name: "T-shirt 1",
        price: 2100.234234234,
        available: true,
        category: "Мужские"
        },
        {
        id: 2,
        image: "2.jpg",
        name: "T-shirt 2",
        price: 3150.12312412,
        available: true,
        category: "Женские",
        },
        {
        id: 3,
        image: "3.jpg",
        name: "T-shirt 3",
        price: 4200.51524,
        availabl: false,
        category: "Женские",
        },
        {
        id: 4, 
        image: "4.jpg",
        name: "T-shirt 4",
        price: 5300.1245512,
        available: true,
        category: "Мужские",
        },
        {
        id: 5,
        image: "5.jpg",
        name: "T-shirt 5",
        price: 6500.3522314,
        available: false,
        category: "Женские",
        },
        {
        id: 6,
        image: "6.jpeg",
        name: "T-shirt 6",
        price: 8700.4124123,
        available: true,
        category: "Женские",
        }
      ]
    }
  },
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