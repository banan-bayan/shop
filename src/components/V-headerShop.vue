<template>
  <div class="header">
    <p class="header__logo">plant</p>
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
</template> 

<script>
export default {
}

</script>

<style lang="scss">
  $padding: 5px;
  $margin: 8px;
  $color-1: black;
  $color-2: white;
  $color-3: grey;

.header {
  background: $color-2;
  height: 100px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  &__logo {
    font-family: 'Mitr';
    font-size: 60px;
    color: #38603C;
    margin-right: 60px;
    margin-left: 10px;
  }
  &__menu { 
    height: 49px;
    font-size: 20px;
    color: $color-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway';
    font-weight: 400;
    width: 70%;
    padding-left: $padding;
    padding-right: $padding;
    padding-top: $padding * 3;
    padding-bottom: $padding * 2;
    &-contacts {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-contacts-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-advice {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-advice-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-order {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto;
      }
      &:hover .header__menu-order-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
      }
    }
    &-catalog {
      padding: $padding;
      &-hr {
        width: 0%;
        border: none;
        border-bottom: 1px solid $color-3;
        transition: all 0.1s ease 0s;
        margin-left: auto;
        margin-right: auto; 
      } 
      &:hover .header__menu-catalog-hr--hover{
        width: 100%;
        transition: all 0.4s ease 0s;
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
</style>  