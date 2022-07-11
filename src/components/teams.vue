<template>
<div class="teams" id="team">
<h3 class="teams-text">teams</h3>
<img src="@/assets/balasir.png" alt="" class="sindhumam">
<img src="@/assets/shaansir.png" alt="" class="sindhumam">
<img src="@/assets/sindhumam.png" alt="" class="sindhumam1">
<img src="@/assets/alansir.png" alt="" class="sindhumam">
<img src="@/assets/maheshsir.png" alt="" class="sindhumam">
</div>
    
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Teams extends Vue {}
</script>
<style>
.sindhumam{
    width: 180.14px;
height: 270.88px;
position: relative;
margin: 30px;
}
.sindhumam1{
    width: 180.14px;
height: 322.62px;
position: relative;
margin: 2%;
margin-top: 0px;
}
.teams{
    position: static;
    top: 2000px;
    margin-bottom: 100px;
    text-align: center;
    margin-top: -200px;
}.teams-text{
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;

color: #FFFFFF;


}
</style>