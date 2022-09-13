<template>
  <div class="roadmap" id="roadmap">
    <h1 class="roadmap-text">ROADMAP</h1>
    <br />
    <div class="roadmap-div1">
      <img src="@/assets/planet_1.png" alt="" width="100%"/>
    </div>
    <img src="@/assets/dots_1.png" alt="" class="dots_1" />
    <img src="@/assets/dots_1.png" alt="" class="dots_2" />
    <img src="@/assets/dots_1.png" alt="" class="dots_3" />
    <img src="@/assets/dots_1.png" alt="" class="dots_4" />
    <div class="roadmap-div2">
      <h1 class="phase-text" >PHASE 1 <!-- <span id="phase1" @click="phase1(phase1)" class="downarrow">&#8595;</span> --></h1><br>
      <div class="roadmap-div2-back" id="phase1-div">
        <h4>➼ Website Launch - Completed</h4>
        <h4>➼ Community Build Up - Recurring</h4>
        <h4>➼ Community Competitions – Recurring</h4>
        <h4>➼ Team Enhancement - Recurring</h4>
        <h4>➼ Dashboard Development - Completed</h4>
        <h4>➼ Smart Contract Audit (Coinscope) - January 2022</h4>
      </div>
    </div>
    <br>
     <div class="roadmap-div3">
    
      <img src="@/assets/planet_2.png" alt="" width="100%"/>
    </div>
    <div class="roadmap-div4">
          <h1 class="phase-text2">PHASE 2</h1>
      <div class="roadmap-div4-back">
        <h5>➼ Smart Contract Audit – March 2022</h5>
        <h5>➼ Team KYC – June 2022</h5>
        <h5>➼ Token Presale (PinkSale) – July 2022</h5>
        <h5>➼ Private Sale – July 2022</h5>
        <h5>➼ Distributed Denial Of Service (DDOS)Integration – July</h5>
        <h5>➼ CoinMarketCap & CoinGecko Listing – July 2022</h5>
        <h5>➼ Smart Contract Audit (Techrate) - August 2022</h5>
        <h5>➼ 2022 Insurance For SLN Token -August 2022</h5>
        <h5>➼ Token Launch In Pancakeswap – August 2022</h5>
        <h5>➼ SilverLine Token Staking – August 2022</h5>
        <h5>➼ SilverLine Token Farming –August 2022</h5>
        <h5>➼ Decentralized Exchange Platform– August 2022</h5>
        <h5>➼ Stake Silverline Token To Earn Alt-Coins –August 2022</h5>
      </div>
    </div>
    <br>
    <div class="roadmap-div5">
      <img src="@/assets/planet_3.png" alt="" width="100%" />
    </div>
    <div class="roadmap-div6">
        <h1 class="phase-text">PHASE 3</h1>
      <div class="roadmap-div6-back">
        <h4>➼ Influencer Marketing - Recurring</h4>
        <h4>➼ Ecosystem Build Up - Ongoing</h4>
      </div>
    </div>
    <br>
    <div class="roadmap-div8">
          <h1 class="phase-text4">PHASE 4</h1>
      <div class="roadmap-div8-back">
        <h5>➼ Partnerships - Upcoming</h5>
        <h5>➼ SilverLine Merchandise - Upcoming</h5>
        <h5>➼ SilverPay Crypto Currency Payment Wallet - Upcoming</h5>
        <h5>➼ Crypto Loans – Upcoming</h5>
        <h5>➼ Crypto Score - Upcoming</h5>
      </div>
    </div>
     <div class="roadmap-div7">
    
      <img src="@/assets/planet_4.png" alt=""  width="100%"/>
    </div><br>
    <div class="roadmap-div9">
      
      <img src="@/assets/planet_5.png" alt="" width="100%" />
    </div>
    <div class="roadmap-div10">
        <h1 class="phase-text5">PHASE 5</h1>
        <div class="roadmap-div10-back">
            <h4>➼ Nobu Limited Edition NFT Collection - Upcoming</h4>
      <h4>➼ NFT MarketPlace – Upcoming</h4>
      <h4>➼ Defi Games - Upcoming</h4>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods:{
    phase1(id){
      let div=<HTMLElement>document.getElementById("phase1-div")
      let ele=<HTMLElement>document.getElementById("phase1")
      if (ele!=null && div!=null) {
        if ( ele.innerHTML='&#8595;') {
            ele.innerHTML='&#8593;'
            div.style.display='block'
        }
        else if (ele.innerHTML='&#8593;') {
          ele.innerHTML='&#8595;'
          div.style.display='none'
        }
      }
    }
  }
})
export default class Roadmap extends Vue {}
</script>
<style>
.phase-text5{
    position: relative;
    font-family: moderne;
    left: 0;
}
.phase-text4{
    position: relative;
    font-family: moderne;
  
}
.phase-text2{
    position: relative;
    font-family: moderne;
    right: 8%;
}
.phase-text {
  position: relative;
  font-family: moderne;
  left: -0%;
}
.roadmap-text {
  font-family: moderne;
}
.roadmap {
  position: relative;
  top: 200px;
  text-align: center;
  align-content: center;
}
.roadmap-div1 {
  text-align: center;
  position: static;
  display: inline-block;
  width: 35%;
  /* left: 10%; */
  /* vertical-align: -100px; */
  margin-left: 5%;
}

.roadmap-div2 {
  float: right;
  display: inline-block;
  width: 42%;
  margin-right: 10%;
  height: auto;
  margin-top: 0%;
}
.roadmap-div2-back {
  border-color: rgba(142, 0, 255, 0.5);
  border-width: 2px;
  border-style: solid;
  
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(142, 0, 255, 0.2) 137.15%
  );
  border-radius: 15.2778px;
  padding: 30px;
  text-align: left;
}
.roadmap-div3 {
  position: static;
  display: inline-block;
  width: 35%;
  float: right;
  margin-top: 15%;
  margin-right: 10%;
}
.roadmap-div4 {
  margin-left: 12%;
  text-align: center;
  position: static;
  display: inline-block;
  /* top: -150px; */
  margin-top: 15%;
  
  width: 42%;
}
.roadmap-div4-back {
  
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  padding: 30px;
  text-align: left;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(142, 0, 255, 0.2) 137.15%
  );
  border-radius: 15.2778px;
}
.roadmap-div5 {
  position: static;
  display: inline-block;
 width: 35%;
 
  /* left: 10%; */
  margin-left: 0%;
  margin-top: 10%;
}
.roadmap-div6 {
  float: right;
 position: static;
  display: inline-block;
  width: 42%;
  top:-400px;
  margin-right: 10%;
  margin-top: 15%;
  

  /* right: 10%; */
}
.roadmap-div6-back {
  
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(142, 0, 255, 0.2) 137.15%
  );
  border-radius: 15.2778px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  padding: 30px;
  text-align: left;
}
.roadmap-div7 {
 position: static;
  display: inline-block;
 /* width: 500.42px;
  height: 404.44px; */
  width: 35%;
  margin-right: 11%;
  top: 20px;
  margin-top: 10%;
}
.roadmap-div8 {
  position: static;
  display: inline-block;
  text-align: center;
  /* left: 94.73px; */
  margin-left: 11%;
  width: 42%;
  float: left;
  height: auto;
  margin-top: 12%;
}
.roadmap-div8-back {
  border-radius: 15.2778px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  padding: 30px;
  text-align: left;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(142, 0, 255, 0.2) 137.15%
  );
  border-radius: 15px;
  
}
.roadmap-div9 {
 position: static;
  display: inline-block;
 width: 35%;
 
  margin-left: 10%;
  top: 00.64px;
  margin-top: 5%;
  margin-bottom: 200px;
}
.roadmap-div10 {
  margin-top: 12%;
  text-align: center;
  position: static;
  display: inline-block;
  width: 42%;
  height: auto;
  margin-right: 10%;
  float: right;
}
.roadmap-div10-back {
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  text-align: left;
  
  padding: 30px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(142, 0, 255, 0.2) 137.15%
  );
  border-radius: 15.2778px;

  font-weight: 500;
  font-size: 15.2778px;
  line-height: 18px;

  text-transform: capitalize;
}
@media screen and (max-width: 840px) {
  .roadmap-div1 {
    display: none;
  }
  .roadmap-div3 {
    display: none;
  }
  .roadmap-div5 {
    display: none;
  }
  .roadmap-div7 {
    display: none;
  }
  .roadmap-div9 {
    display: none;
  }
  .roadmap {
    top: 200px;
  }
  .roadmap-div2 {
    top: 100px;
    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: auto;
    
    margin-top: 100px;
  }
  .roadmap-div2-back{
    margin-top: 30px;
  }
  .roadmap-div4 {
    top: 100px;
    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: auto;
    margin-top: 50px;
  }.roadmap-div4-back{
    margin-top: 50px;
  }  .roadmap-div6 {
    top: 00px;
    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    margin-top: 50px;
    float: none;
  }.roadmap-div6-back{
    margin-top: 50px;
  }
  .roadmap-div8 {
    top: 50px;
    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: auto;
    margin-top: 50px;
  }.roadmap-div8-back{
    margin-top: 50px;
  }.roadmap-div10-back{
    margin-top: 50px;
  }
  .roadmap-div10 {
    top: 100px;
    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: auto;
    margin-top: 50px;
  }.phase-text{
 float: left;
  }.phase-text2{
     float: left;
     margin-left: 30px;
  }.phase-text4{
     float: left;
  }.phase-text5{
     float: left;
  }
}
</style>
