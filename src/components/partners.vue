<template>
<div class="partners">
    <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/Vector_1.png" alt="" class="vector_1">
         <img src="@/assets/Vector_4.png" alt="" class="vector_4">
<span class="partners-text">partners</span><br>
<span class="partners-text2">creating the future with best of the best</span><br>
<div class="partners-div">
    <span class="div-text">partner</span>
    <span class="div-text2">audited by</span>
    <span class="div-text3">team kyc</span>
    <img src="@/assets/binance.png" alt="" class="binance">
    <img src="@/assets/coinscope.png" alt="" class="coinscope">
    <img src="@/assets/hys.png" alt="" class="hys">
   <img src="@/assets/Line.png" alt="" class="line">
   <img src="@/assets/Line.png" alt="" class="line2">
   <img src="@/assets/pinksale.png" alt="" class="pinksale">
   <span class="pinksale-text">PinkSale</span>
    <img src="@/assets/verified.png" alt="" class="verified">
</div>
<h2 class="partners-text3">Silverline listing partners</h2>

<img src="@/assets/listing1.png" alt="" class="listing">
<img src="@/assets/listing2.png" alt="" class="listing">
<img src="@/assets/listing3.png" alt="" class="listing">
<img src="@/assets/listing4.png" alt="" class="listing">
<img src="@/assets/listing5.png" alt="" class="listing1">
<img src="@/assets/listing6.png" alt="" class="listing"><br class="br">
<img src="@/assets/listing7.png" alt="" class="listing1">
<img src="@/assets/listing8.png" alt="" class="listing">
<img src="@/assets/listing9.png" alt="" class="listing">
<img src="@/assets/listing10.png" alt="" class="listing1">
<img src="@/assets/listing11.png" alt="" class="listing1">
<img src="@/assets/listing12.png" alt="" class="listing"><br class="br">
<img src="@/assets/listing13.png" alt="" class="listing1">
<img src="@/assets/listing14.png" alt="" class="listing1">
<img src="@/assets/listing15.png" alt="" class="listing">
<img src="@/assets/listing16.png" alt="" class="listing1">
<img src="@/assets/listing17.png" alt="" class="listing1">



</div>
    
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
   
})
export default class Partners extends Vue {}
</script>
<style>
.pinksale-text{
    position: relative;
    right: -33%;
    top: 23%;
    font-size: 23px;
    font-weight: 700;
}
.verified{
    position: relative;
    width: 5%;
    right: -33%;
    top: 28%;
}
.pinksale{
    position: relative;
    width: 10%;
    right: -33%;
    top: 38%;
}
.listing{
    display: inline-block;
    width: 10%;
    margin: 20px;
}
.listing1{
    display: inline-block;
    width: 8%;
    margin: 20px;
}
.div-text{
position: absolute;
left: 10%;
top: 20%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 19.0972px;
line-height: 23px;
text-transform: uppercase;

color: #FFFFFF;

}.div-text3{
    position: absolute;
right: 10%;
top: 20%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 19.0972px;
line-height: 23px;
text-transform: uppercase;

color: #FFFFFF;

}
.div-text2{
    position: absolute;
left: 42%;
top: 20%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 19.0972px;
line-height: 23px;
text-transform: uppercase;

color: #FFFFFF;

}
.line2{
    position: absolute;
    left: 66%;
    right: auto;
    top: 25%;
}
.line{
    position: absolute;
    left: 33%;
    right: auto;
    top: 25%;
}
.hys{
   position: absolute;
left: 55%;
top: 40.01%; 
}
.coinscope{
    position: absolute;
left: 37%;
top: 40.01%;
}
.binance{
    position: absolute;
left: 2.64%;

top: 40.25%;

}
.partners-div{
    position: relative;
width: 850px;
height: 239.1px;
left: 20%;
top: 101.6px;
border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;
}
.partners{
    position: static;
    text-align: center;
    align-content: center;
}.partners-text{
font-family:moderne;
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
color: #FFFFFF;
}.partners-text3{
  margin-top: 200px;
font-style: normal;
font-weight: 800;
font-family:moderne;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
color: #FFFFFF;
}
.partners-text2{
  
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
padding: 20px;
font-size: 19.0972px;
line-height: 22px;
text-align: center;
text-transform: uppercase;
}
@media screen and (max-width: 840px){
    .partners-div{
        position: relative;
        width: 96%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        height: 150px;
    }.pinksale{
        right: -35%;
        width: 8%;
    }.pinksale-text{
        right: -35%;
        top: 35%;

        font-size: 15px;
        font-weight: 00;
    }.verified{
        right: -36%;
        width: 4%;
        top:36% ;
    }.binance{
        width: 40%;
        left: 2%;
        width: 30%;
    }.coinscope{
        width: 25%;
        width: 20%;
    }.hys{
        width: 15%;
        right: 1%;
        width: 10%;
    }.line{
        top:5%
    }.div-text{
        left: 10%;
         font-size: 15px;
    }.div-text3{
        right: 5%;
        font-size: 15px;
    }.line2{
        top: 5%;
    }.div-text2{
        left: 40%;
        font-size: 15px;
    }.br{
        display: none;
    }.listing{
        width: 15%;
    }.listing1{
        width: 12%;
    }
}
</style>