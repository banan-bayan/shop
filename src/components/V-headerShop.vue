<template>
  <!--
  <p class="header__logo">plant</p>
  -->
  <div class="header">
    <div class="header__menu">
      <router-link
        v-if="$route.path !== '/contacts'"
        class="header__menu-link-to-contacts" 
        :to="{name: 'contacts'}"
      >
        <div class="header__menu-contacts">
          Контакты
          <hr class="header__menu-contacts-hr header__menu-contacts-hr--hover">
        </div>
      </router-link>
      <router-link 
        v-if="$route.path !== '/advice'"
        class="header__menu-link-to-advice"
        :to="{name: 'advice'}"
      >
        <div class="header__menu-advice">
          Советы по уходу
          <hr class="header__menu-advice-hr header__menu-advice-hr--hover">
        </div>
      </router-link>
      <router-link 
        v-if="$route.path !== '/cart'"
        class="header__menu-link-to-order" 
        :to="{name: 'cart'}"
      >
        <div class="header__menu-order">
          Оплата и доставка
          <hr class="header__menu-order-hr header__menu-order-hr--hover">
        </div>
      </router-link>                                                                  
      <router-link
        v-if="$route.path !== '/'"
        class="header__menu-link-to-catalog" 
        :to="{name: 'catalog'}"
      >
        <div class="header__menu-catalog"> Каталог
          <hr class="header__menu-catalog-hr header__menu-catalog-hr--hover">
        </div>
      </router-link>
    </div>
  </div>
  <cart-icon />
  <router-link :to="{name: 'cart'}">
    <p class="county-items-in-header" 
      v-if="CART.length"
    >  {{  CART.length }}
    </p>
  </router-link>
</template> 

<script>
import cartIcon from "@/components/icons/MenuCart.vue";
import { mapGetters} from "vuex";
export default {
  components: {cartIcon,},
  computed: {
    ...mapGetters([
      'CART'
    ]),
  }
}

</script>

<style lang="scss">
  $padding: 5px;
  $margin: 8px;
  $color-1: black;
  $color-2: white;
  $color-3: grey;

  
.header {
  padding-bottom: 0;
  background: $color-2;
  height: 70px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  &__logo {
    position:absolute;
    left: 10px;
    top: 5px;
    font-family: 'Mitr';
    font-size: 30px;
    color: #38603C;
  }
  &__menu { 
    margin-left: auto;
    margin-right: auto;
    height: 49px;
    font-size: 20px;
    color: $color-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway';
    font-weight: 400;
    width: 50%;
    padding-left: $padding;
    padding-right: $padding;
    padding-top: $padding;
    padding-bottom: auto;
    &-contacts {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 3px solid #38603C;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-contacts-hr--hover{
        width: 100%;
        transition: all 0.1s ease 0s;
      }
    }
    &-advice {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 3px solid #38603C;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-advice-hr--hover{
        width: 100%;
        transition: all 0.1s ease 0s;
      }
    }
    &-order {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 3px solid #38603C;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-order-hr--hover{
        width: 100%;
        transition: all 0.1s ease 0s;
      }
    }
    &-catalog {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 3px solid #38603C;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto; 
      } 
      &:hover .header__menu-catalog-hr--hover{
        width: 100%;
        transition: all 0.1s ease 0s;
      } 
    }
    &-link-to-order {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-contacts {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-advice {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
    &-link-to-catalog {
      text-decoration: none;
      color: $color-1;
      padding: $padding;
    }
  }
}
.county-items-in-header {
  position:absolute;
  top: 41px;
  right: 31px;
  color: rgba($color: #ed3636, $alpha: 1.0);
  font-weight: 700;
  font-size: 11px;
  font-family: 'Roboto';
}
</style>  