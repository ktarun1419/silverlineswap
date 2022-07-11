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
    <img src="@/assets/binance.png" alt="" class="binance">
    <img src="@/assets/coinscope.png" alt="" class="coinscope">
    <img src="@/assets/hys.png" alt="" class="hys">
   <img src="@/assets/Line.png" alt="" class="line">
</div>
</div>
    
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Partners extends Vue {}
</script>
<style>
.div-text{
position: absolute;
left: 22%;
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
right: 15%;
top: 20%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 19.0972px;
line-height: 23px;
text-transform: uppercase;

color: #FFFFFF;

}
.line{
    position: absolute;
    left: auto;
    right: auto;
    top: 25%;
}
.hys{
   position: absolute;
right: 10%;
top: 40.01%; 
}
.coinscope{
    position: absolute;
right: 20%;
top: 40.01%;
}
.binance{
    position: absolute;
left: 10.64%;

top: 40.25%;

}
.partners-div{
    position: relative;
width: 578.26px;
height: 239.1px;
left: 30%;
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
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
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
@media screen and (max-width: 800px){
    .partners-div{
        position: relative;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }.binance{
        width: 40%;
    }.coinscope{
        width: 25%;
    }.hys{
        width: 15%;
    }
}
</style>