<template>
<!-- <img src="@/assets/back.jpeg" alt="" class="bg" /> -->
  <router-view class="router"/>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
})

export default class App extends Vue{

}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  position: absolute;
width: 100%;
scroll-behavior:auto;
height:auto;
color: white;
left: 0px;
top: 0px;
 //background-image: url('./assets/backgroundScreen1.png');
background: radial-gradient(33.15% 44.58% at 50% 52.98%, #3C0B63 0%, #18002B 99.98%);
}
.router{
  z-index: 0;
}
#bg {
  position: absolute;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: 100%;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
