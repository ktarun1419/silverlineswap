<template>
    <div class="launch">
        <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/stone_1.png" alt="" class="stone_1">
        <span class="launch-text">LAUNCHING SOON</span><br>
        <div class="launch-div1">
            <img src="@/assets/launch-token.png" alt="" class="sparc-img">
        </div>
        <div class="launch-div3">
            <img src="@/assets/launch-sparc.png" alt="" class="sparc-img">
        </div>
        <div class="launch-div2">
            <img src="@/assets/launch-dex.png" alt="" class="sparc-img">
        </div>
        <img src="@/assets/stone_1.png" alt="" class="stonel-1">
    </div>
</template>
<script lang="ts">
import { Options ,Vue} from "vue-class-component";

@Options({})
export default class Launching extends Vue{

}
</script>
<style>
.sparc-img{
    width: 100%;
    height: 100%;
}
.launch-div3{
   width: 331.39px;
   border-radius: 15.2778px;
height: 376.94px;
display: inline-block;
position: static;
margin-top: 100px;
margin-right: 50px;

}
.stonel-1{
    position:relative;
width: 84.03px;
height: 86.32px;
right: 3%;
top: 179.58px;
}
.stone_1{
    position: absolute;
width: 84.03px;
height: 86.32px;
left: 5%;
top: 300.58px;


}
.launch-div2{
position: static;
width: 331.39px;
height: 376.94px;
display: inline-block;
margin-top: 100px;

/* background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%); */
border-radius: 15.2778px;
}
.launch-coin{
    margin-top: 30px;
    width: 70%;
}
.launch{
    position: static;
    margin-top: 150px;
}
.launch-text{
    position: static;
font-family:moderne;
/* top: 1199.31px; */

font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
color: #FFFFFF;
}.launch-div1{
   margin-left: 100px;
position: static;
width: 331.39px;
height: 376.94px;
margin-right: 50px;
display: inline-block;

/* background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%); */
border-radius: 15.2778px;
}
@media screen and (max-width: 840px){
    .stone_1{
        display: none;
    }
    .stonel-1{
        display: none;
    }.launch-div1{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        vertical-align: 0;
        margin-top: 50px;

    }.launch-div2{
        margin-top: 50px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }.launch-div3{
        margin-top: 50px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }.launch-text{
        
    }
}
</style>