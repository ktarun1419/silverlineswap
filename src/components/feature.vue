<template>
    <div class="feature" id="feature">
        <span class="feature-heading">Features</span>
        <div class="feature-div1">
            <img src="@/assets/gun_1.png" alt="" class="feature-img">
            <h2 class="feature-text">GUN</h2>
            <h5 class="feature-text">Global Unique Number, a global unique Identity that will protect you and your future.</h5>
        </div>
         <div class="feature-div4">
            <img src="@/assets/cryptoloan.png" alt="" class="feature-img">
            <h2 class="feature-text">CRYPTO LOAN</h2>
            <h5 class="feature-text">Global Unique Number, a global unique Identity that will protect you and your future.</h5>
        </div>
        <div class="feature-div3">
            <img src="@/assets/silverpay.png" alt="" class="feature-img">
            <h2 class="feature-text">SILVERPAY</h2>
            <h5 class="feature-text">A space to enjoy your day-to-day shopping experience with cryptocurrency.</h5>
        </div>
        <div class="feature-div2">
            <img src="@/assets/nobu.png" alt="" class="feature-img">
            <h2 class="feature-text">NOBU</h2>
            <h5 class="feature-text">An Artificial Intelligent personal assistant who will guide you through your crypto journey.</h5>
        </div>
        
       

    </div>
</template>
<script lang="ts">
import { Options ,Vue} from "vue-class-component";

@Options({})
export default class Features extends Vue{

}
</script>
<style>
.feature-text{
    position: relative;
    top: 40px;
}
.feature-img{
    top: 40px;
    position: relative;

}.feature-div3{
     position: absolute;
width: 221.53px;
height: 287.99px;
right: 30%;
top: 100px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div4{
     position: absolute;
width: 221.53px;
height: 287.99px;
left: 30%;
top: 100px;
border-width: 1px;
  border-style: solid;
  border-image: 
    linear-gradient(
      -10deg, 
      rgba(16, 140, 255, 1),
rgba(255, 255, 255, 0)
    ) 1 80%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div2{
     position: absolute;
width: 221.53px;
height: 287.99px;
right: 5%;
top: 100px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div1{
    position: absolute;
width: 221.53px;
height: 287.99px;
margin-left: 5%;
top: 100px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature{
    position: relative;
     top: 900px;
}.feature-heading{
position: absolute;
width: 136.74px;
height: 27.5px;
right: 45%;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;

color: #FFFFFF;


}
</style>