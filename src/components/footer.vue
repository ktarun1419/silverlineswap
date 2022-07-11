<template>
  <div class="footer">
    <img src="@/assets/Vector_1.png" alt="" class="vector_1" />

    <footer class="footer-div">
     <a href="https://www.twitter.com/SilverLineSwap_" target="_blank"><img src="@/assets/twitter.png" alt="" class="footer-twitter" /></a> 
      <a href="https://www.facebook.com/SilverLineSwap/" target="_blank"><img src="@/assets/facebook.png" alt="" class="footer-twitter" /></a>
    <a href="https://www.t.me/SilverLineSwap" target="_blank"> <img src="@/assets/telegram.png" alt="" class="footer-twitter" /></a> 
     <a href="https://www.instagram.com/silverlineswap/" target="_blank"><img src="@/assets/instagram.png" alt="" class="footer-twitter" /></a> 
     <a href="https://www.youtube.com/channel/UCJHQq8Eor178K9Jn4aR-91Q" target="_blank"><img src="@/assets/youtube.png" alt="" class="footer-twitter" /></a> 
      <span class="footer-text">2021 Silverline. All rights reserved. </span>
    </footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>
<style>
.footer-twitter {
  position: relative;
  top: 40%;
  left: -27%;
  margin: 5px;
}
.footer {
  position: static;
  margin-top: 500px;
}
.footer-div {
  width: 100%;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
}
.footer-text {
  position: relative;
  width: 213.17px;
  height: 17.58px;
  left: -40%;
  top: 60%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.2222px;
  line-height: 15px;
  text-transform: capitalize;
  color: #ffffff;
}
@media screen and (max-width: 800px){
    .footer-twitter{
        left:0;
        margin-right: auto;
        margin-left: auto;
        margin-right: 2%;
    }
}
</style>