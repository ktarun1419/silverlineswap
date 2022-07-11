<template>
<div class="teams" id="team">
<span class="teams-text">teams</span>
</div>
    
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Teams extends Vue {}
</script>
<style>
.teams{
    position: static;
    top: 2000px;
    margin-bottom: 600px;
    text-align: center;
}.teams-text{
    position: relative;
width: 96.25px;
height: 27.5px;
top: 10.97px;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;

color: #FFFFFF;


}
</style>