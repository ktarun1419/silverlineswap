<template>
    <div class="roadmap" id="roadmap">
        <h1 class="roadmap-text">ROADMAP</h1>
        <div class="roadmap-div1">
            <img src="@/assets/planet_1.png" alt="">
        </div>
        <div class="roadmap-div2">
            <h4> Website Launch - Completed</h4>
           <h4>Community Build Up - Recurring</h4>
           <h4>Community Competitions – Recurring</h4>
           <h4>Team Enhancement - Recurring</h4>
           <h4>Dashboard Development - Completed</h4>
           <h4>Smart Contract Audit (Coinscope) - January 2022</h4>
        </div>
        <div class="roadmap-div3">
            <img src="@/assets/planet_2.png" alt="">
        </div>
        <div class="roadmap-div4">
            <h5> Smart Contract Audit – March 2022 </h5>
           <h5>Team KYC – March 2022</h5>
           <h5>Token Presale (PinkSale) – April 2022</h5>
           <h5>Private Sale – April 2022</h5>
           <h5>CoinMarketCap & CoinGecko Listing – April 2022</h5>
           <h5>Distributed Denial Of Service (DDOS)Integration – April</h5>
           <h5>2022 Insurance For SLN Token -April 2022</h5>
           <h5>Token Launch In Pancakeswap – May 2022</h5>
           <h5>SilverLine Token Staking – May 2022</h5>
           <h5>SilverLine Token Farming –May2022</h5>
           <h5>Decentralized Exchange Platform– May 2022</h5>
           <h5>Stake Silverline Token To Earn Alt-Coins –May 2022</h5>
           <h5>Smart Contract Audit (Techrate) - March 2022/h4></h5>
        </div>
        <div class="roadmap-div1">
            <img src="@/assets/planet_3.png" alt="">
        </div>
        <div class="roadmap-div5">
            <h4> Influencer Marketing - Recurring</h4>
           <h4>Ecosystem Build Up - Ongoing</h4>
           
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
.roadmap-text{
    position: relative;
}
.roadmap{
    position: relative;
    top: 1350px;
}
.roadmap-div1{
    position: relative;
    width: 380.42px;
height: 354.44px;
left: 10%;
top: 100px;
}
.roadmap-div2{
    padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: auto;
float: right;
top: -250px;
right: 10%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;
}
.roadmap-div3{
    position: relative;
    width: 380.42px;
height: 354.44px;
float: right;
right: -25%;
top: 350px;
}
.roadmap-div4{
    padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: auto;
float: left;
top: -100px;
left: 8%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;
}
.roadmap-div5{
     padding: 30px;
    text-align: left;
    position:relative;
width: 490.42px;
height: auto;
float: right;
top: 800px;
right: 10%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(142, 0, 255, 0.2) 137.15%);
border-radius: 15.2778px;

}

</style>
