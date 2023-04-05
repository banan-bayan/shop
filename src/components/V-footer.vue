<template>
  <footer>
    <div class="footer">
      <div class="footer__menu">
        <div class="footer__menu-links">
          <router-link
            class="footer__menu-links-link-to-contacts" 
            :to="{name: 'contacts'}"
          >
            <div class="footer__menu-contacts">Контакты</div>
          </router-link>
          <router-link
            class="footer__menu-links-link-to-advice" 
            :to="{name: 'advice'}"
          >
            <div class="footer__menu-advice">Советы по уходу</div>
          </router-link>
          <router-link
            class="footer__menu-links-link-to-cart"
            :to="{name: 'cart'}"
          >
            <div class="footer__menu-order">Доставка</div>
          </router-link>
        </div>
        <div class="footer__social-network">
          <instagram class="footer__social-network-instagram-icon" /> 
          <vkontakte class="footer__social-network-vkontakte-icon" />
          <pinterest class="footer__social-network-pinterest-icon" /> 
        </div>
      </div>
      <div class="footer__logo-and-email">
        <div class="footer__logo-and-email-logo">plant</div>
        <div class="footer__logo-and-email-email"> e-mail : plantshop@yandex.ru </div>
      </div>
      <div class="footer__copyright"> 2023 магазин цветов и растений PLANT </div>
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
  margin-top: 10px;
  background: #333434;
  height: 205px;
  &__menu {
    display: flex;
  }
  &__menu-links {
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
  &__logo-and-email {
    display: flex;
    margin-bottom: 20px;
    &-logo {
      display: flex;
      color: $color-2;
      font-size: 48px;
      font-family: 'Mitr';
      width: 10%;
      margin: 5px $margin * 2;
    }
    &-email {
      display: flex;
      align-items: center;
      width: 100%;
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
      align-self: center;
    }
  }
  &__social-network {
    width: 15%;
    align-items: center;
    margin: $margin * 2 0;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
  }
  &__copyright {
    display: flex;
    width: 30%;
    color: $color-2;
    font-family: 'Raleway';
    font-size: 18px;
    margin-left: $margin * 2;
    justify-content: flex-start;
    padding-bottom: 5px;
  }
}


@media (max-width: 768px) {
  .footer {
    max-width: 768px;
    height: 225px;
    &__menu-links {
      display: flex;
      flex-direction: column;
      margin: 5px;
      &-link-to-cart {
        text-decoration: none;
        color: $color-2;
        align-self: flex-start;
      }
      &-link-to-contacts {
        text-decoration: none;
        color: $color-2;
        align-self: flex-start;
      }
      &-link-to-advice {
        text-decoration: none;
        color: $color-2;
        margin-top: 10px;
        margin-bottom: 10px;
        align-self: flex-start;
        text-align: start;
      }
    }
    &__social-network {
      margin-right: 50px;
      width: auto;
      flex-direction: column;
      &-instagram-icon {
        margin-bottom: 25px;
      }
      &-vkontakte-icon {
        margin-bottom: 25px;
      }
    }
    &__logo-and-email {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      &-logo {
        display: none;
      }
      &-email {
        width: 61%;
        align-self: flex-start;
        text-align: start;
        padding-left: 2px;
      }
    }
    &__copyright {
      display: none;
    }
  }
}
</style>