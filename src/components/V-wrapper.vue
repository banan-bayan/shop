<template>
  <div class="v-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'v-wrapper',
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    }
  }
}
</script>

<style lang="scss">
.v-wrapper {
  max-width: 100%;
  background: rgb(233, 232, 232);
  border: 2px solid green;
}
</style>