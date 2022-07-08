<template>
  <div>
    <Topbar />
    <Upper/>
    <About/>
    <Launching/>
    <Features/>
    <Roadmap />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Topbar from "@/components/topbar.vue";
import Upper from "@/components/upper.vue";
import About from "@/components/about.vue";
import Launching from "@/components/launching.vue";
import Features from "@/components/feature.vue";
import Roadmap from "@/components/roadmap.vue";
@Options({
  components: {
    Topbar,
    Upper,
    About,
    Launching,
    Features,
    Roadmap

  },
})
export default class HomeView extends Vue {}
</script>
