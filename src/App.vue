<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "@/components/V-wrapper.vue";
  export default {
    name: 'app',
    components: {Wrapper},
    data() {
      return {

      }
    },
    mounted() {}  
  }
</script>

<style lang="scss"> 


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 //миксины или примеси 
  //@mixin borer-box($fz , $color , $border , $width , $height  ) {
 // font-size: $fz;
 // color: $color;
 // border: $border;
 // width: $width;
 // height: $height;
//}
// шаблон
//%style-cards {
 // background: palevioletred;
 // border-radius: 10px;
 // height: 600px;
 // width: 200px;
 // box-shadow: 2px 2px 2px 2px palevioletred;
 // margin-right: 40px;
////}

// переменная
//$fz: 20px;

// вложенность
//.container {
 // display: flex;
  //font-size: $fz; // исп переменной
  //color: darkgreen;
 // p {
 //   font-size: $fz; //исп переменной
 //   color: palevioletred;
 //   &:hover {
 //     color: teal;
  //    font-size: $fz; //исп переменной
 //   }
 // }
//}
// исп шаблона
//.card {
  //@include borer-box(20px,  darkblue, 1px solid darkred  , 200px , 600px )
//}
</style>
