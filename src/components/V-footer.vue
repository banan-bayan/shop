<template>
  <footer>
    <div class="footer">
      <div class="menu-social-network">
        <div class="footer__menu">
          <router-link
            class="footer__menu-link-to-contacts" 
            :to="{name: 'contacts'}"
          >
            <div class="footer__menu-contacts">Контакты</div>
          </router-link>
          <router-link
            class="footer__menu-link-to-advice" 
            :to="{name: 'advice'}"
          >
            <div class="footer__menu-advice">Советы по уходу</div>
          </router-link>
          <router-link
            class="footer__menu-link-to-cart"
            :to="{name: 'cart'}"
          >
            <div class="footer__menu-order">Доставка</div>
          </router-link>
        </div>
        <div class="footer__social-network">
          <instagram class="instagram-icon" /> 
          <vkontakte class="vkontakte-icon" />
          <pinterest class="pinterest-icon" /> 
        </div>
      </div>
      <div class="footer__logo">plant</div>
      <div class="footer__email"> e-mail : plantshop@yandex.ru </div>
      <div class="copyright"> 2023 магазин цветов и растений PLANT </div>
    </div>
  </footer>
</template>

<script>
import instagram from "@/components/icons/Instagram.vue";
import vkontakte from "@/components/icons/Vkontakte.vue";
import pinterest from "@/components/icons/Pinterest.vue";
export default {
  components: { instagram, vkontakte, pinterest, }
}

</script>

<style lang="scss">
$margin: 8px;
$padding: 8px;
$color-1: black;
$color-2: white;
.footer {
  
  margin-top: 50px;
  background: #333434;
  height: 255px;
  &__menu {
    display: flex;
    color: $color-2;
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 400;
    margin-top: 42px;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: $margin $margin * 2 ;
  //  border: 2px solid pink;
    &-link-to-cart {
      text-decoration: none;
      color: $color-2;
      padding: $padding;
    }
    &-link-to-contacts {
      text-decoration: none;
      color: $color-2;
      padding: $padding;
    }
    &-link-to-advice {
      text-decoration: none;
      color: $color-2;
      padding: $padding;
    }
  }
  &__logo {
    display: flex;
    color: $color-2;
    font-size: 48px;
    font-family: 'Mitr';
    width: 10%;
    margin: $margin $margin * 2 ;

  //  border: 2px solid white;
  //  margin-left: 100px;
  }
  &__email {
    display: flex;
    align-items: center;
    width: 100%;
    margin: $margin * 2 0;
    margin-left: auto;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Raleway';
    border: 1px solid $color-2;
    border-right: none;
    color: $color-2;
    height: 49px;
    width: 20%;
    padding: $padding;
    margin-right: 300px;  
  }
  &__social-network {
    width: 15%;
    margin: $margin * 2 0;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    
  }
  .copyright {
  //  border: 2px solid yellow;
    display: flex;
    width: 30%;
    color: $color-2;
    font-family: 'Raleway';
    margin: $margin $margin * 2 ;
    font-size: 18px;
    justify-content: flex-start;
  }
}
.menu-social-network {
  display: flex;
}
.vkontakte-icon{
  align-self: center;
}
    
</style>