<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
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
        article: "T1",
        available: true,
        category: "Мужские"
        },
        {
        id: 2,
        image: "2.jpg",
        name: "T-shirt 2",
        price: 3150.12312412,
        article: "T2",
        available: true,
        category: "Женские",
        },
        {
        id: 3,
        imag: "3.jpg",
        nam: "T-shirt 3",
        pric: 4200.51524,
        articl: "T3",
        availabl: false,
        categor: "Женские",
        },
        {
        id: 4, 
        imag: "4.jpg",
        nam: "T-shirt 4",
        pric: 5300.1245512,
        articl: "T4",
        availabl: true,
        categor: "Мужские",
        },
        {
        id: 5,
        imag: "5.jpg",
        nam: "T-shirt 5",
        pric: 6500.3522314,
        articl: "T5",
        availabl: false,
        categor: "Женские",
        },
        {
        id: 6,
        image: "6.jpeg",
        name: "T-shirt 6",
        price: 8700.4124123,
        article: "T6",
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
  .catalog {
    &__list {
      color: $color-1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>