<template>
<div class="featurenew">
    <div class="feature" id="feature">
        <span class="feature-heading">Features</span>
        <div class="feature-div1">
            <img src="@/assets/gun_1.png" alt="" class="feature-img">
            <img src="@/assets/gun-elipse.png" alt="" class="feature-img2">
            <img src="@/assets/gun-border.png" alt="" class="feature-img3">
            <h2 class="feature-text">GUN</h2>
            <h5 class="feature-text">Global Unique Number, a global unique Identity that will protect you and your future.</h5>
        </div>
         <div class="feature-div4">
            <img src="@/assets/cryptoloan.png" alt="" class="feature-img">
            <img src="@/assets/home_elipse.png" alt="" class="feature-img2">
            <img src="@/assets/cryptoload-border.png" alt="" class="feature-img3">
            <h2 class="feature-text">CRYPTO LOAN</h2>
            <h5 class="feature-text">A strategically flexible collateral free loan provided to you based on your crypto score.</h5>
        </div>
        <div class="feature-div3">
            <img src="@/assets/silverpay.png" alt="" class="feature-img">
            <img src="@/assets/silverpay-elipse.png" alt="" class="feature-img2">
            <img src="@/assets/silverpay-border.png" alt="" class="feature-img3">
            <h2 class="feature-text">SILVERPAY</h2>
            <h5 class="feature-text">A space to enjoy your day-to-day shopping experience with cryptocurrency.</h5>
        </div>
        <div class="feature-div2">
            <img src="@/assets/nobu.png" alt="" class="feature-img">
            <img src="@/assets/nobu-elipse.png" alt="" class="feature-img2">
            <img src="@/assets/nobu-border.png" alt="" class="feature-img3">
            <h2 class="feature-text">NOBU</h2>
            <h5 class="feature-text">An Artificial Intelligent personal assistant who will guide you through your crypto journey.</h5>
        </div>
        
       

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
.featurenew{
    position: static;
}
.feature-img3{
    position: absolute;

    z-index: 1;
width: 100%;
height: 100%;
left: 0%;
}
.feature-img2{
    position: absolute;
width: 112.29px;
height: 112.29px;
right: 27%;
top: 5%;

}
.feature-text{
    position: relative;
    top: 40px;
    padding: 5px;
}
.feature-img{
    top: 40px;
    position: relative;
}.feature-div3{
    
      position: absolute; 
width: 18%;
height: 291.04px;
right: 29%;
top: 100px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div4{
     position: absolute; 
     /* position: absolute; */
width: 18%;
height: 291.04px;
left: 29%;
top: 100px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div2{
    position: absolute; 
     /* position: absolute; */
width: 18%;
height: 291.04px;
right: 5%;
top: 100px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature-div1{
    /* position: absolute; */
    position: absolute; 
width: 18%;
height: 291.04px;
margin-left: 5%;
top: 100px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(142, 0, 255, 0.1) 137.15%);
border-radius: 30.5556px 15.2778px;
}
.feature{
    position: relative;
     top: 100px;
}.feature-heading{
position: absolute;
width: 136.74px;
height: 27.5px;
right: 45%;
font-family:moderne;
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;

color: #FFFFFF;


}
@media screen and (max-width: 840px){
    .feature-div1{
         margin-top: 100px;
        position: static;
        display: inline-block;
         margin-right: 2%;
       margin-left: 2%;
       width: 80%;
    }
    .feature-div2{
        margin-top: 100px;
        margin-right: 2%;
       margin-left: 2%;
         position: static;
         display: inline-block;
         width: 80%;
    }.feature-div3{
         margin-top: 100px;
         margin-right: 2%;
       margin-left: 2%;
         position: static;
      display: inline-block;
      width: 80%;
    }.feature-div4{
         margin-top: 100px;
         margin-right: 2%;
       margin-left: 2%;
        display: inline-block;
         position: static;
         width: 80%;
    }
    .feature-img2{
        display: none;
    }
    .feature-img3{
        display: none;
        
    }.feature-heading{
        left: 30%;
    }
}
</style>