<template>
  <headerShop />
  <form 
    class="form"
    @submit.prevent
  >
  <button class="form__create-post"></button>
  <input 
    type="text" 
    class="form__input">
  </form>
  <footerComponent />
</template> 

<script>
import headerShop from "@/components/V-headerShop.vue";
import footerComponent from "@/components/V-footer.vue";
export default {
  components: {footerComponent, headerShop},
  name: 'chat',
  methods: {

  }
}
</script>

<style>
.form {
  min-height: 250px;
}

</style> 