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
  border: 3px solid green;
  margin: 0px 10px;
}
@media (max-width: 1200px) {
  .v-wrapper {
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media(max-width: 992px) {
  .v-wrapper {
    max-width: 750px;
  }
}
@media(max-width: 767px) {
  .v-wrapper {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>