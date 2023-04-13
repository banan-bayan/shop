<template>
  <headerShop />
  <div class="contacts">
    <div class="contacts__big-contacts"></div>
    <div class="info">
      <div class="number-phone">
        <div class="number-phone__phone">Телефон</div>
        <div class="number-phone__number">8 123 456 78 90</div>
      </div>
      <div class="vl"></div>
      <div class="mail-adress">
        <div class="mail-adress__adress">Почта</div>
        <div class="mail-adress__mail">info@plant.ru</div>
        </div>
    </div>
    <div class="location">
      <div class="country">РОССИЯ, ЕКАТЕРИНБУРГ</div>
      <div class="street">620014, ВАЙНЕРА УЛ., Д. 66А </div>
      <div class="subway">
        <subwayIcon />
        <div class="subway-station">ГЕОЛОГИЧЕСКАЯ</div>
      </div>
    </div>
  </div>
  <footerComponent />
</template> 

<script>
import headerShop from "@/components/V-headerShop.vue";
import footerComponent from "@/components/V-footer.vue";
import subwayIcon from "@/components/icons/Subway.vue";
export default {
  components: {footerComponent, headerShop, subwayIcon},
  name: 'contacts'
}
</script>

<style lang="scss">
.contacts {
  color: black;
  height: 950px;
  &__big-contacts {
    width: 100%;
    height: 290px;
    background-image: url(@/assets/img/bigContacts.jpg);
  }
}
.info {
  display: flex;
  justify-content: center;
  gap: 104px;
  margin-top: 60px;
  margin-bottom: 52px;
}
.number-phone {
  display: flex;
  width: 20%;
  flex-direction: column;
  &__number {
    font-size: 22px;
    font-weight: 700;
    font-family: "Roboto";
    margin-left: auto;
    padding: 2px;
  }
  &__phone {
    font-size: 17px;
    margin-left: auto;
    padding: 2px;
  }
}
.mail-adress {
  display: flex;
  width: 20%;
  flex-direction: column;
  &__mail {
    font-size: 22px;
    font-weight: 700;
    margin-right: auto;
    padding: 2px;
  }  
  &__adress {
    font-size: 17px;
    margin-right: auto;
    padding: 2px;
  }
}
.location {
  justify-content: space-around;
  display: flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.vl {
  border-left: 1px solid black;
  height: 50px;
}
.country {
  font-size: 22px;
  font-weight: 700;
  font-family: "Raleway";
  align-self: center;
 
}
.street {
  font-family: "Raleway";
  font-size: 20px;
  align-self: center;
  
}
.subway {
  display:  flex;
  justify-content: space-between;
  font-family: "Roboto";
  height: 35px;
}
.subway-station {
  font-family: "Roboto";
  font-size: 20px;
  align-self: center;
  margin-left: 20px;
}
</style>  