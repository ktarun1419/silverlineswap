<template>
    <div class="about" id="about">
        <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/Vector_3.png" alt="" class="vector_3">
        <img src="@/assets/Vector_2.png" alt="" class="vector_2">
        <img src="@/assets/Vector_4.png" alt="" class="vector_4">
         <img src="@/assets/bluegem_1.png" alt="" class="bluegem_1">
        <h1 class="about-heading">ABOUT SILVERLINE</h1>
        <div class="about-div1">
           <span class="about-text">SilverLine is an organization that develops decentralized applications which facilitate our users to enjoy the maximum utility of all the services in our crypto ecosystem. We envision a long road of financial freedom for the common, through a wide arena of Best-in-Class products and services from SilverLine.
      
               </span>  
                </div>
    </div>
</template>
<script lang="ts">
import { Options,Vue } from "vue-class-component";

@Options({})
export default class About extends Vue{

}
</script>
<style>
.vector_4{
    position: absolute;
right: 1%;
opacity: 0.3;
}
.vector_3{
    position: absolute;
left: 0%;
right: 0%;
top: 23.1%;
bottom: -43.1%;
opacity: 0.3;

}
.about-heading{
    font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
}
.dots_1{
    position: absolute;
width: 100%;
height: auto;
left:-1px
}
.about{
     position: relative;
    margin-top: 750px; 
    scroll-behavior: smooth;
}
.about-div1{
box-sizing: border-box;
width: 491.94px;
height: 220.76px;
/* left: 64.16px;
top: 825.76px; */
margin-left: 10%;
margin-top: 10%;
padding: 20px;
padding-top: 30px;
text-align: left;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;
}
.about-text{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 19.5694px;
line-height: 132.02%;
/* or 23px */

text-align: justify;
}
</style>
