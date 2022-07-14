<template>
    <div class="roadmap" id="roadmap">
         
        <h1 class="roadmap-text">ROADMAP</h1><br>
        <div class="roadmap-div1">
            <h1 class="phase-text">PHASE 1</h1>
            <img src="@/assets/planet_1.png" alt="">
        </div>
          <img src="@/assets/dots_1.png" alt="" class="dots_1">
          <img src="@/assets/dots_1.png" alt="" class="dots_2">
          <img src="@/assets/dots_1.png" alt="" class="dots_3">
          <img src="@/assets/dots_1.png" alt="" class="dots_4">
        <div class="roadmap-div2">
            <h4>➼ Website Launch - Completed</h4>
           <h4>➼ Community Build Up - Recurring</h4>
           <h4>➼ Community Competitions – Recurring</h4>
           <h4>➼ Team Enhancement - Recurring</h4>
           <h4>➼ Dashboard Development - Completed</h4>
           <h4>➼ Smart Contract Audit (Coinscope) - January 2022</h4>
        </div>
        <div class="roadmap-div3">
            <h1>PHASE 2</h1>
            <img src="@/assets/planet_2.png" alt="">
        </div>
        <div class="roadmap-div4">
            <h5> ➼ Smart Contract Audit – March 2022 </h5>
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
        <div class="roadmap-div5">
            <h1 class="phase-text">PHASE 3</h1>
            <img src="@/assets/planet_3.png" alt="">
        </div>
        <div class="roadmap-div6">
            <h4>➼ Influencer Marketing - Recurring</h4>
           <h4>➼ Ecosystem Build Up - Ongoing</h4> 
        </div>
         <div class="roadmap-div7">
             <h1 class="phase-text">PHASE 4 </h1>
            <img src="@/assets/planet_4.png" alt="">
        </div>
        <div class="roadmap-div8">
            <h5>➼ Partnerships - Upcoming </h5>
           <h5>➼ SilverLine Merchandise - Upcoming</h5>
           <h5>➼ SilverPay Crypto Currency Payment Wallet - Upcoming</h5>
           <h5>➼ Crypto Loans – Upcoming</h5>
           <h5>➼ Crypto Score - Upcoming</h5>
        </div>
        <div class="roadmap-div9">
            <h1 >PHASE 5</h1>
            <img src="@/assets/planet_5.png" alt="">
        </div>
        <div class="roadmap-div10">
            <h4>➼ Nobu Limited Edition NFT Collection - Upcoming</h4>
           <h4>➼ NFT MarketPlace – Upcoming</h4> 
           <h4>➼ Defi Games - Upcoming</h4>
        </div>
    </div>
</template>
<script lang="ts">
import { Options ,Vue} from "vue-class-component";

@Options({})
export default class Roadmap extends Vue{

}
</script>
<style>
.phase-text{
    position: relative;
    left: 8%;
    font-family:roboto-bold;
}
.roadmap-text{
font-family:roboto-bold;
}
.roadmap{
    position: relative;
    top: 600px;
    text-align: center;
    align-content: center;
}
.roadmap-div1{
    text-align: center;
    position: relative;
    width: 380.42px;
height: 354.44px;
/* left: 10%; */
top: 50px;
margin-left: 10%;
}

.roadmap-div2{
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
    padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: auto;
top: -300px;
left: 50%;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;
}
.roadmap-div3{
    position:relative;
    width: 380.42px;
height: 354.44px;
top: -100px;
float: right;
margin-right: 10%;
}
.roadmap-div4{
    margin-left: 10%;
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
    padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: 550px;
top: -100px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;
}.roadmap-div5{
    position: relative;
    width: 380.42px;
height: 354.44px;
/* left: 10%; */
top: 00px;
margin-left: 10%;
}
.roadmap-div6{
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
     padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: 100px;
float: right;
top: -200px;
margin-right:10% ;
/* right: 10%; */
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;

}.roadmap-div7{
    position:relative;
    width: 380.42px;
height: 354.44px;
left: 60%; 
top: 150px;
}
.roadmap-div8{
    border-radius: 15.2778px;
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
     padding: 30px;
    text-align: left;
   position: relative;
width: 543.89px;
height: auto;
/* left: 94.73px; */
top: -100px;
margin-left: 10%;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15
}
.roadmap-div9{
    position: relative;
width: 440.76px;
height: 481.25px;
margin-left: 10%;
top: -00.64px;
}
.roadmap-div10{
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
  position: relative;
width: 495px;
height: auto;
left: 50%;
top: -300px;
text-align: left;
padding: 30px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;


font-weight: 500;
font-size: 15.2778px;
line-height: 18px;

text-transform: capitalize;
}
@media  screen and (max-width:800px) {
    .roadmap-div1{
        display: none;
    }.roadmap-div3{
        display: none;
    }.roadmap-div5{
        display: none;
    }.roadmap-div7{
        display: none;
    }.roadmap-div9{
        display: none;
    }.roadmap{
        top: 100px;
        
    }
    .roadmap-div2{
        top: 100px;
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: auto;
        margin-top: 100px;
    }.roadmap-div4{
        top: 100px;
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: auto;
        margin-top: 100px;
    }
    .roadmap-div6{
        top: 100px;
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        margin-top: 100px;
        float: none;

    }
    .roadmap-div8{
        top: 100px;
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: auto;
        margin-top: 100px;
    }.roadmap-div10{
        top: 100px;
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: auto;
        margin-top: 100px;
    }
}



</style>