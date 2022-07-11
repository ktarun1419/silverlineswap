<template>
    <div class="total-supply">
        <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/Vector_1.png" alt="" class="vector_1">
         <img src="@/assets/Vector_4.png" alt="" class="vector_4">
         
        <span class="total-supply-text">total supply</span>
        <div class="token-supply-div">
        </div>
        <span class="total-distribution-text">token distribution</span>
         <div class="token-supply-div2">
        </div>
        <img src="@/assets/Vector_2.png" alt="" class="vector2-totalsupply" />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Totalsupply extends Vue {}
</script>
<style>
.vector2-totalsupply{
    
    position: relative;
    top: -250px;
    left: -1%;
    right: 1%;
    width: 100%;
    opacity: 0.3;
}
.token-supply-div2{
    position: relative;
width: 420.9px;
height: 324.65px;
left: 55%;
top: -212.57px;
border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;

}
.total-distribution-text{
    position: relative;
    width: 287.22px;
height: 27.5px;
left: 20%;
top:-300px;

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
}
.total-supply{
    position: static;
  
}
.token-supply-div{
    position: relative;
width: 451.46px;
height: 324.65px;
left: 12%;
border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
top: 150.57px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;
}
.total-supply-text{
    position: relative;
width: 203.19px;
height: 27.5px;
right: 20%;
top: 71.04px;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
}
</style>