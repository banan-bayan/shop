<template>
  <div class="catalog">

    <div class="header">
      <div class="logo">
        <img 
        src="@/assets/img/logo.jpg" 
        alt="logo"
        class="info__logo"
        >
      </div>
      <div class="header__info">
        <div class="info-contacts">Контакты</div>
        <div class="info-advice">Советы по уходу</div>
        <router-link :to="{name: 'cart'}">
          <div class="info-order">Оплата и доставка</div>
        </router-link>
      </div>


      <div class="header__icons">
        <svgFind class="icons-find" />
        <svgContacts class="icons-contacts"/>

        <router-link :to="{name: 'cart'}">
          <div class="icons-link-to-cart">
            <svgCart>
              {{ CART.length }} 
            </svgCart> 
          </div>
        </router-link>
      </div>
      
    </div>


    <div class="big">
      <img 
        src="@/assets/img/big.jpg" 
        alt="big-photo"
        class="img-big"
      >
    </div>

    <div class="catalog__list">
      <catalogItem 
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import svgFind from "@/components/icons/SVGfind.vue"
import svgContacts from "@/components/icons/SVGcontacts.vue"
import svgCart from "@/components/icons/SVGcart.vue"
import catalogItem from "@/components/V-catalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'catalog',
  components: {catalogItem,svgFind, svgContacts,svgCart},
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) =>  response.data ? console.log('ooo right') : console.log('ooo nooooou'));
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
}
</script>
<style lang="scss">
  $padding: 8px;
  $margin: 8px;
  .catalog {
    border: solid 3px red;
    &__list {
      color: #545454;
    //  display: flex;
    //  flex-wrap: wrap;
      border: solid 3px purple;
      
    //  justify-content: space-around;
      display: grid;
      gap: 20px;
      grid-auto-flow: dense;
      grid-template-columns: repeat(auto-fit, minmax(400px, 500px));
     // grid-auto-flow: dense;
      
    }
    
  }
  .header {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 1px green;
    margin-bottom: $margin * 2;
    padding: $padding;
    &__logo {
      border: 3px solid darkblue;
    }
    &__info {
      margin-left: auto;
      margin-right: auto;
      height: 49px;
      font-size: 20px;
      color: #000;
      display: flex;
      justify-content: space-around;
      border: 1px solid darkblue;
      align-items: center;
      justify-content: center;
      //width: 100%;
      font-family: 'Raleway';
      font-weight: 400;
    }
    &__icons {
      min-width: 150px;
      display: flex;
      align-items: center;
    //  justify-content: space-between;
      margin-left: auto;
      border: 3px solid yellow;
    }
  }

    
    .info-contacts {
      border: 1px solid black;
    }
    .info-advice {
      border: 1px solid black;
    }
    .info-order {
      border: 1px solid black;
    }

    
    
    .icons-find {
      border: 1px solid red;
    }
    .icons-contacts {
      border: 1px solid red;
    }
    .icons-link-to-cart {
      border: 1px solid red;
    }
    .img-big {
    width: 100%;
   // margin-bottom: 20px;
   // min-width: 100%;
  }
</style>