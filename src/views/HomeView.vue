<template>
  <div>
    <Topbar  />
    
    <Upper />
    <About />
    <Launching/>
    <Features/>
     <Roadmap />
    <Tokenomics />
    <Totalsupply/>
    <Teams/>
    <Partners/>
    <Faq/>
    <Footer/>
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
import Tokenomics from "@/components/tokenomics.vue";
import Totalsupply from "@/components/totalsupply.vue";
import Teams from "@/components/teams.vue";
import Partners from "@/components/partners.vue";
import Faq from "@/components/faq.vue";
import Footer from "@/components/footer.vue";
@Options({
  components: {
    Topbar,
    Upper,
    About,
    Launching,
    Features,
    Roadmap,
    Tokenomics,
    Totalsupply,
    Teams,
    Partners,
    Faq,
    Footer

  },
})
export default class HomeView extends Vue {}
</script>
<style>
.tag {
}

.tag {
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1s;
}

.tag.visible {
  opacity: 1;
  transform: translate(0, 0);
}

</style>