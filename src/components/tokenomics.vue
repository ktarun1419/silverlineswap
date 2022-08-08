<template>
  <div class="tokenomics" >
       <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/Vector_1.png" alt="" class="vector_1">
         <img src="@/assets/Vector_4.png" alt="" class="vector1-tokenomics">
    <br><span class="tokenomics-title">TOKENOMICS</span>
    <div class="token-div1" id="tokenomics">
      <h2>
        <span class="token-detail-title">name</span>
        :
        <span class="token-detail-value">silverline</span>
      </h2>
       <h2>
        <span class="token-detail-title">symbol</span>
        :
        <span class="token-detail-value">sln</span>
      </h2>
      <h2>
        <span class="token-detail-title">Token Address</span>
        :
        <span class="token-detail-value1">0x40491520d7BdcdD670cf387902BaD615ab65f43B</span>
      </h2>
      <h2>
        <span class="token-detail-title">blockchain</span>
        :
        <span class="token-detail-value">binance smart chain</span>
      </h2>
      <h2>
        <span class="token-detail-title">type</span>
        :
        <span class="token-detail-value">bep20</span>
      </h2>
      <h2>
        <span class="token-detail-title">total supply</span>
        :
        <span class="token-detail-value">1,000,000,000,000</span>
      </h2>
    </div>
    <div class="token-div2">
        <img src="@/assets/tokenomics_2.png" alt="" width="100%">
    </div>
     <img src="@/assets/Vector_2.png" alt="" class="vector_2">
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Tokenomics extends Vue {}
</script>
<style>
.token-div2{
    position: relative;
width: 395.07px;
height: 358.26px;
left: 60%;
top: -300.44px;
}
.vector1-tokenomics{
    position: absolute;
    top: 5600px;
    right: 0%;
    opacity: 0.3;
}
.token-detail-title {
  
  font-style: normal;
  font-weight: 700;
  font-size: 19.0972px;
  line-height: 23px;
  text-indent: 3.81944px;
  text-transform: uppercase;
  color: #3cf3ff;
}
.token-detail-value {
  font-style: normal;
  font-weight: 700;
  font-size: 19.0972px;
  line-height: 23px;
  text-indent: 3.81944px;
  text-transform: uppercase;
  color: white;
}
.token-detail-value1 {
  font-style: normal;
  font-weight: 700;
  font-size: 15.0972px;
  line-height: 23px;
  text-indent: 3.81944px;
  text-transform: uppercase;
  color: white;
}
.token-div1 {
  position: relative;
  width: 441.53px;
  height: auto;
  padding: 30px;
  text-align: left;
  left: 15%;
  top: 100px;
  border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
  border-radius: 15.2778px;
}
.tokenomics-title {
  width: 185.62px;
  height: 27.5px;
  left: auto;
  right: auto;
  font-family:moderne;
  font-style: normal;
  font-weight: 800;
  font-size: 26.7361px;
  line-height: 40px;
  text-transform: uppercase;
}
.tokenomics {
  position: static;
  margin-top: 800px;
  text-align: center;
}
@media screen and (max-width: 840px){
    .tokenomics{
        margin-top: 300px;
        margin-bottom: 300px;
       margin-left: auto;
        margin-right: auto;
        align-content: center;
    }.token-div2{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        top: 0;
        position: static; 
        margin-top: 150px;  
    }
    .token-div1{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        left: 0;

    }.token-detail-value1{
        font-size: 12px;
    }
}
</style>