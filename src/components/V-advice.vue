<template>
  <headerShop />
  <div class="advice__big-image"></div>
  <h1 class="advice__title">Советы по уходу</h1>
  <div
    class="advice__item" 
    v-for="advice in ADVICES" 
    :key="advice.id" 
  >
    <img 
      class="advice__img"
      :src="require('@/assets/img/' + advice.image)" alt="img"
    >
    <div class="advices">
      <div class="advices__name"> {{ advice.name }} </div>
      <div class="advices__light"><b class="advices__bold"> СВЕТ: </b> {{ advice.light }} </div>
      <div class="advices__watering"><b class="advices__bold"> ПОЛИВ: </b>  {{ advice.watering }} </div>
      <div class="advices__humidity"><b class="advices__bold"> ВЛАЖНОСТЬ: </b> {{ advice.humidity }} </div>
    </div>
  </div>
  <footerComponent />
</template> 

<script>
import { mapActions, mapGetters } from "vuex";
import headerShop from "@/components/V-headerShop.vue";
import footerComponent from "@/components/V-footer.vue";
export default {
  components: {footerComponent, headerShop,},
  name: 'advices',
  methods: {
    ...mapActions(['GET_ADVICES_DATA_FROM_API'])
  },
  computed: {
    ...mapGetters(['ADVICES'])
  },
  mounted() {
    this.GET_ADVICES_DATA_FROM_API()
       .then((response) =>  response.data ? console.log('DONE') : console.log('ERROR'));
  }
}
</script>

<style lang="scss">

.advice {
  &__title {
    font-size: 30px;
    text-align: left;
    margin-left: 55px;
    margin-bottom: 30px;
    margin-top: 30px; 
  }
  &__big-image {
    background-image: url(@/assets/img/bigAdvice.jpg);
    width: 100%;
    height: 250px;
  }
  &__img {
    border: 5px solid white;
    margin: 10px;
    margin-right: 80px;
    width: 30%;
    height: 60%;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
    -moz-box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
    box-shadow: 0px 0px 6px 3px rgba(153, 155, 157, 0.56);
  }
  &__item {
    display: flex;
    margin-bottom: 80px;
    margin-left: 90px;
  }
}
.advices {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  text-align: left;
  font-size: 16px;
  width: 70%;
  &__name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  &__light {
    line-height: 200%;
    text-align: left;
    padding: 3px;
    margin-bottom: 30px;
    line-height: 25px;
    letter-spacing: 1px; 
  }
  &__watering {
    margin-bottom: 30px;
    line-height: 25px;
    letter-spacing: 1px;
  }
  &__humidity {
    margin-bottom: 0px;
    line-height: 25px;
    letter-spacing: 1px;
  }
  &__bold {
    letter-spacing: 0px;
    margin: 0;
  }
}
</style>  