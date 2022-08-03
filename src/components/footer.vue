<template>
  <div class="footer">
    <img src="@/assets/Vector_1.png" alt="" class="vector_1" />

    <footer class="footer-div">
     <a href="https://www.twitter.com/SilverLineSwap_" target="_blank"><img src="@/assets/twitter.png" alt="" class="footer-twitter" /></a> 
      <a href="https://www.facebook.com/SilverLineSwap/" target="_blank"><img src="@/assets/facebook.png" alt="" class="footer-twitter" /></a>
    <a href="https://www.t.me/SilverLineSwap" target="_blank"> <img src="@/assets/telegram.png" alt="" class="footer-twitter" /></a> 
     <a href="https://www.instagram.com/silverlineswap/" target="_blank"><img src="@/assets/instagram.png" alt="" class="footer-twitter" /></a> 
     <a href="https://www.youtube.com/channel/UCJHQq8Eor178K9Jn4aR-91Q" target="_blank"><img src="@/assets/youtube.png" alt="" class="footer-twitter" /></a> 
      <span class="footer-text">2021 Silverline. All rights reserved. </span><br>
      <span class="email-text1">Embark with us on a journey to the crypto universe
To get started, share your email ID.
</span><br>
<div class="email-box">
      
      <div class="email-box-content">
        <input
          class="email-box-text"
          placeholder="enter your email address"
          type="email"
        />
        <button class="email-box-button">Send</button>
      </div>
    </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>
<style>
.email-box-button {
  box-sizing: border-box;
  left: 70%;
  position: absolute;
  right: 0%;
  top: 0%;
  bottom: 0%;
  color: white;
  font-size: 15px;
  border: none;
  background: linear-gradient(94.96deg, #6439c7 0.95%, #943cca 109.33%);
  border-radius: 7.63889px;
}
.email-box-text {
  position: absolute;
  width: 65%;
  height: 16.81px;
  left: 0%;
  top: -3%;
  padding: 14px;
  background: transparent;
  font-weight: 700;
  font-size: 20.2778px;
  line-height: 23px;
  border-width: 0px;
  color: #ffffff;

  transform: rotate(0.17deg);
}
.email-box-content {
  position: absolute;
  left: 10.78%;
  right: 10.67%;
  top: 15%;
  bottom: 15%;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255);
  border-radius: 7.63889px;
}
.email-box {
  position: relative;
  width: 50%;
  height: 68.47px;
  left: 45%;
  top: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
  border-radius: 15.2778px;
}
.email-text1{
    
    position: relative;
    top: 20%;
    left: 20%;

}
.footer-twitter {
  position: relative;
  top: 40%;
  left: -30%;
  margin: 5px;
}
.footer {
  position: static;
  margin-top: 300px;
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
@media screen and (max-width: 840px){
    .footer-twitter{
        left:0;
        margin-right: auto;
        margin-left: auto;
        margin-right: 2%;
    }.email-box {
    height: 40px;
    width: 80%;
    left: 0;
    top: -20%;
  }
  .email-box-text {
    padding: 0;
    width: 65%;
    top: 12%;
    left: 5%;
  }.email-text1{
      display: none;
  }.email-box-text{
      font-size: 10px;
  }
}
</style>