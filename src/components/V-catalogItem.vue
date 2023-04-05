<template>  
  <div class="catalog-item">
   
    <button 
      class="catalog-item__add-to-cart-btn btn" 
      @click="addToCart"
    >
    <div
      v-if="product_data.sale"
      class="sale-label"
    > - {{ product_data.sale * 100 }}  % 
    </div>
      <img 
        class="catalog-item__image" 
        :src="require('@/assets/img/' + product_data.image)" alt="img"
      > 
    </button>
    <div class="catalog-item__info">
      <div class="catalog-item__info-category">
        {{ product_data.category }}
      </div>
      <div class="catalog-item__info-name"> 
        {{ product_data.name }} 
      </div>
      <div class="catalog-item__price">
        <div
          class="price__all-price" 
          :class="{isPriceSale: product_data.sale}"
        > 
          {{ product_data.price }} &#8381 
        </div>
        <div 
          class="price__sale-price"
          v-if="product_data.sale"  
        > 
          {{  this.salePrice }} &#8381 
        </div>
      </div>
    </div>
  </div>   
</template>

<script>
export default {
  name: 'catalog-item',
  data() {
    return {
      salePrice: ''
    }
  },
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
   // console.log(this.product_data)
   this.product_data.quantity = 1;
   this.salePrice = this.product_data.price - (this.product_data.price * this.product_data.sale)
   
  },
  computed: {
    
  }
}
</script>

<style lang="scss">
$radius: 4px;
$margin: 8px;
$padding: 8px;
$color-1: black;
$color-2: white;
$color-3: grey;


.catalog-item {
  box-shadow: 0 0 8px 0 #e0e0e0;
  border-radius: $radius;
  border: 5px solid $color-2;
 -webkit-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
  -moz-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
  box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
  height: 100%;
  //  border: 5px solid green;
  &__image {
    border-radius: $radius;
    //border: 2px solid gold;
  }
  &__add-to-cart-btn {
    height: 89%;
    //border: 2px solid darkblue;
  }
  &__info {
    background: rgb(233, 232, 232);
    font-family: 'Raleway';
    font-weight: 400;
    display: flex;
    flex-direction: column;
    height: 120px;
    //border: 2px solid red;
    &-category {
      color: $color-1;
      font-size: 16px;
      margin: $margin;
      margin-bottom: 0;
      margin-right: auto;
      }
    &-name {
      color: $color-1;
      font-size: 26px;
      margin: $margin;
      margin-right: auto;
    }
  }
  &__price {
    color: $color-1;
    font-size: 40px;
    font-family: 'Roboto';
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    margin-bottom: 10px;
  } 
}
.price__sale-price {
  font-size: 28px;
  font-family: 'Roboto';
//  border: 2px solid orange;
  margin-left: auto;
  margin-right: 20px;
}
.price__all-price {
  font-size: 28px;
  color: $color-1;
  font-family: 'Roboto';
//  border: 2px solid green;
  margin-left: auto;
  margin-right: 20px;

}
.isPriceSale {
  text-decoration: line-through #FF5A5A;
  color: $color-3;
  font-size: 40px;
  font-weight: 400;
  margin-right: auto;
  margin-left: 20px;
  font-family: 'Roboto';
//  border: 2px solid red;
}
.sale-label {
  background: #FF5A5A;
  margin: auto;
  width: 7%;
  height: 33px;
  color: $color-2;
  font-size: 16px;
  position: absolute;
  padding-top: 7px;
  margin-top: 20px;
  font-family: 'Roboto';
}



@media(max-width: 767px) {
  .catalog-item {
    width: 70%;
    border: 3px solid blue;
    margin: 0px 10px 0px 10px;
    &__image {
      border-radius: $radius;
      width: 100%;
      height: 100%;
    }
    &__info {
      background: rgb(233, 232, 232);
      font-family: 'Raleway';
      font-weight: 400;
      display: flex;
      flex-direction: column;
      height: 120px;
      //border: 2px solid red;
      &-category {
        color: $color-1;
        font-size: 16px;
        margin: $margin;
        margin-bottom: 0;
        margin-right: auto;
        margin-left: auto;
      }
      &-name {
        color: $color-1;
        font-size: 26px;
        margin: $margin;
        margin-right: auto;
        margin-left: auto;
      }
    }
    &__price {
      color: $color-1;
    //  font-size: 40px;
      font-family: 'Roboto';
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      margin-bottom: 10px;
      margin-left: 20px;
      
    } 
  }
  .sale-label {
    background: #FF5A5A;
    margin: auto;
    width: 14%;
    height: 33px;
    color: $color-2;
    font-size: 16px;
    position: absolute;
    padding-top: 7px;
    margin-top: 20px;
    font-family: 'Roboto';
  }
  .price__sale-price {
    font-size: 24px;
  //  margin-right: 20px;
  //  border: 1px solid green;
  }
  .price__all-price {
    font-size: 24px;
   margin-left: 0px;
  //  border: 1px solid red;
  }
}
</style>