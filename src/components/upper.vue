<template>
  <div class="upper" id="upper">
    <img src="@/assets/Vector_1.png" alt="" class="vector_1" />
    <img src="@/assets/Vector_2.png" alt="" class="vector_2" />
    <img src="@/assets/rocket_1.png" alt="" class="rocket" />
    <img src="@/assets/Blue_1.png" alt="" class="blue_1" />
    <img src="@/assets/bluegem_1.png" alt="" class="bluegem_1" />
    <img src="@/assets/Yellow_1.png" alt="" class="yellow_1" />
    <div class="div1">
      <h1>Get In Line For SilverLine</h1>
      <h4>
        SilverLine Token will be released in the Binance Smart Chain at the
        event of the Presale. Grab the SilverLine Token at just $0.0013 for an
        undeniable scope for growth.
      </h4><br>
      <button class="buy-sln" @click="joincommunity">JOIN OUR COMMUNITY →</button><br>
      <div class="logo-div" id="logo-div">
        <a href="https://www.t.me/SilverLineSwap" target="_blank"> <img src="@/assets/telegram1.png" alt="" class="logo"></a>   
     <a href="https://discord.gg/DYDd29ywmM" target="_blank"> <img src="@/assets/discord1.png" alt="" class="logo"></a> 
     <a href="https://www.twitter.com/SilverLineSwap_" target="_blank"><img src="@/assets/twitter1.png" alt="" class="logo"></a>  
      <a href="https://medium.com/@silverlineswap" target="_blank">  <img src="@/assets/medium1.png" alt="" class="logo"></a>
         
      </div>
    
    </div>
    <div class="div2">
       
       <h1 class="presale-text">PRE-SALE</h1>
        
            <div class="countdown-day" > 
                <h3 id="days">00</h3>
                <h4>Days</h4>
            </div>
            <div class="countdown-day" >
                <h3 id="hours">00</h3>
                <h4>Hours</h4>
            </div>
            <div class="countdown-day">
                <h3 id="minutes">00</h3>
                <h4>Minutes</h4>
            </div>
            <div class="countdown-day">
                <h4 id="seconds">00</h4>
                <h4>Seconds</h4>
            </div>
            <br>
        
      <div class="div-input">
        <input
          type="number"
          class="input-box"
          placeholder="Enter USDT BEP-20 "
          v-model="this.usdt_amount"
        />
        <span class="usdt_span">
          <img src="@/assets/usdt_logo.png" class="usdt_logo" />USDT
        </span>
        <span class="arrow">
          <img src="@/assets/arrow.png" alt="" />
        </span>
        <input
          type="number"
          class="input-box"
          placeholder="SilverLine Amount"
          id="sln-amount"
          v-model="this.sln_amt"
        />
        <span class="sln_span">
          <img src="@/assets/sl_logo.png" class="usdt_logo" /> SLN
        </span>
        <button class="input-box-button" @click="buy">BUY SLN</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import transactions from "@/mixins/transactions";
@Options({
  data() {
    return {
      usdt_amount: null,
      sln_amt: null,
    };
  },
  watch: {
    usdt_amount(newvalue, oldvalue) {
      this.sln_amt = newvalue / 0.0013;
    },
  },
  mounted(){
      let countDownDate = new Date("Jul 19, 2022 20:00:00").getTime();
      console.log('countdate'+countDownDate)
      setInterval(()=>{
          var now = new Date().getTime();
console.log('now'+now)
// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id=".countdown"
let day=document.getElementById('days')
if (day!=null) {
    day.innerText=days.toString()
}
let hour=document.getElementById('hours')
if (hour!=null) {
    hour.innerHTML= hours.toString()
}
let min=document.getElementById('minutes')
if (min!=null) {
    min.innerHTML= minutes.toString()
}
let sec=document.getElementById('seconds')
if (sec!=null) {
    sec.innerHTML= seconds.toString()
}
//
  

// If the count down is over, write some text
if (distance < 0) { 
  countDownDate += 3600000 * Math.abs(Math.round(distance / 3600000)-1);
}
      },1000)
  },
  methods: {
    buy() {
        if (this.usdt_amount>0) {
            transactions.prototype.buying_Sln(this.usdt_amount);
        }else{
            alert('Please Enter Valid Amount')
        }
      
    },
    joincommunity(){
        let logo=document.getElementById('logo-div')
        if (logo!=null) {
            logo.style.display='block'
        }
    },
  }
})
export default class Upper extends Vue {}
</script>
<style>
.countdown-day{
    display: inline-block;
    margin: 10px;
    width: 60px;
    height: 60px;
background: linear-gradient(93.62deg, #3c0b63 1.06%, #c11bb9 147.09%);
border-radius: 15px;
border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
margin-bottom: 40px;

}
.logo-div{
    display: none;
}
.logo{
    width: 40px;
    background-color: white;
    margin: 10px;
    border-radius: 60%;
    border: 2px solid black;
    
}
.bluegem_1 {
  position: absolute;
  left: 13.12%;
  right: 80.77%;
  top: 550px;
  bottom: 2.48%;
}
.blue_1 {
  position: absolute;
  width: 43px;
  height: 55px;
  left: 50%;
  top: 332px;
}
.yellow_1 {
  position: absolute;
  width: 69px;
  height: 40px;
  left: 80%;
  top: 80px;
}
.vector_2 {
  position: absolute;
  top: 500px;
  width: 100%;
  left: -1.53%;
  right: 1.53%;
  /* background: radial-gradient(38.47% 89.66% at 50% 50%, #F128C5 8.15%, #C11BB9 100%); */
  mix-blend-mode: soft-light;
  opacity: 0.3;
}
.vector_1 {
  position: absolute;
  left: 0%;
  right: 10%;
  top: 800px;

  width: 20%;
  opacity: 0.05;
  /* background: radial-gradient(42.21% 64.7% at 50% 50%, #F128C5 8.15%, #C11BB9 100%); */
  transform: rotate(-10.83deg);
}
.rocket {
  position: relative;
  width: 63.02px;
  height: 63.02px;
  left: 45%;
  top: 343px;
}
.sln_span {
  position: relative;
  width: 80.56px;
  height: 27.23px;
  top: -39px;
  left: 35%;
  color: black;
  padding: 10px;
  background: #d9a9ff;
  border-radius: 30px;
  padding-right: 20px;
  font-weight: 600;
}
.usdt_logo {
  position: relative;
  width: 19.29px;
  height: 19.29px;
  top: 4px;
}
.usdt_span {
  position: relative;
  width: 80.56px;
  height: 27.23px;
  top: -42px;
  left: 40%;
  color: black;
  padding: 10px;
  background: #d9a9ff;
  border-radius: 30px;
  font-weight: 600;
}
.arrow {
  width: 35.08px;
  position: relative;
  height: 35.08px;
  align-self: center;
  background: rgba(142, 0, 255, 1);
  right: 30px;
  z-index: 2;
  padding: 8px;
  border-radius: 30px;
}
.input-box-button {
  width: 100%;
  height: 53.3px;
  background: rgba(142, 0, 255, 0.7);
  border-radius: 10px;
  margin-top: 10px;
  border: 0px;
  color: white;
}
.input-box {
  /* width: 342.8px; */
  width: 100%;
  height: 53.3px;
  background: #ffffff;
  border-radius: 10px;
  border: 0px;
  font-weight: 600;
  color: black;
  font-size: 17px;
}
.buy-sln {
  width: auto;
  height: 42.78px;
  border: 0px;
  background: linear-gradient(93.62deg, #3c0b63 1.06%, #c11bb9 147.09%);
  border-radius: 6.11111px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 19.0972px;
  line-height: 23px;
  color: white;
  cursor: pointer;
}
.div1 {
  float: left;
  margin-left: 10%;
  width: 440px;
  text-align: left;
  margin-top: 14%;
}
.div2 {
  float: right;
  margin-right: 10%;
  width: 391.02px;
  height: 281.46px;
  margin-top: 5%;
  padding: 10px;
}
.div-input {
  background: linear-gradient(
    179.84deg,
    rgba(204, 204, 204, 0.5) 0.14%,
    rgba(122, 122, 122, 0) 141.17%
  );
  border-radius: 10px;
  border: 1px, solid,
    linear-gradient(179.84deg, rgba(182, 91, 255, 1) rgba(255, 161, 234, 1));
  padding: 10px;
  padding-top: 20px;
}
.upper {
  position: static;
  width: 100%;
}@media screen and (max-width: 800px)
{
    .bluegem_1{
        display: none;
    }
    .blue_1{
        display: none;
    }
    .yellow_1{
        display: none;
    }
    .vector_1{
        display: none;
    }.vector_2{
         display: none;
    }.rocket{
         display: none;
    }
    .stone_1{
        display: none;
    }.div2{
        float: none;
        margin-top: 100px;
        margin-right: 0%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-bottom: 200px;
        width: 90%;
    }.div-input{
        position: static;
        max-height: 400px;
        margin-top: 100px;
    }
    .div1{
        
       margin-top: 20%;
        margin-bottom: 100px;
        position: static;
        width: 80%;
        float: none;
    }.presale-text{
        display: none;
    }.input-box-button{
        width: 100%;
    }.countdown-day{
        width: 60px;
        height: 60px;
    }
}

</style>