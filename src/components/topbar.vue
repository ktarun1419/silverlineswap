<template>
  <div>
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" /><label></label>
      <span class="sl-container"
        ><img style="" class="sl-logo" src="@/assets/sl-logo.png" alt="" /><img
          style=""
          class="sl-text"
          src="@/assets/sl-text.png"
      /></span>
      <ul>
        <li>
          <a @click="tohome">Home</a>
        </li>
        <li>
          <a @click="toabout">About</a>
        </li>
        <li>
          <a @click="tofeature">Features </a>
        </li>
        <li>
            <!-- href="https://www.silverlineswap.org/Docs/WHITEPAPER_0522.pdf" -->
          <a href="https://silverline-pdf.vercel.app/" target="_blank">Whitepaper</a>
        </li>
        <li>
          <a href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/March/SilverLine.pdf" target="_blank"> Audit Report</a>
        </li>
        <li>
          <a @click="totokenomics">Tokenomics</a>
        </li>
        <li>
          <a @click="toteam">Team</a>
        </li>
        <li>
          <a @click="tofaq">FAQ</a>
        </li>
        <li>
          <a href="https://www.silverlineswap.org/blog/" target="_blank">Blog</a>
        </li>
        <li>
           <button class="connect-button" @click="connect">
            {{ getTopbarAcc }}
          </button>
        </li>
         
        
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Metamask from "@/mixins/metamask";
import store from "@/store";
@Options({
  methods: {
    connect() {
      Metamask.prototype.provider();
    },
    whitepaper(){
        this.$router.replace({name:"Whitepaper"})
    },
    toabout(){
        let ele=document.getElementById("about")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
    },
    tofeature(){
        let ele=document.getElementById("feature")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
    }
    ,
    tohome(){
        let ele=document.getElementById("upper")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView()
        }
    }
    ,
    totokenomics(){
        let ele=document.getElementById("tokenomics")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "end", inline: "center"})
        }
    }
    ,
    tofaq(){
        let ele=document.getElementById("faq")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
    }
    ,
    toteam(){
        let ele=document.getElementById("team")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
    }
  },
  mounted() {
    const handler = () => {
     this.connect()
    };
    window.ethereum.on("accountsChanged", handler);
    window.ethereum.on("chainChanged",handler)
  },
})
export default class Topbar extends Vue {
  public get getTopbarAcc(): string {
    return store.state.topbarAcc;
  }
}
</script>
<style>

.sl-container {
  margin-top: 30px;
}
.sl-logo {
  margin-top: 0px;
  float: left;

  margin-left: 1%;
}
.sl-text {
  float: left;
  margin-top: 20px;
}
.connect-button {
  cursor: pointer;
  float: right;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15.2222px;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
  line-height: 15px;
  color: #ffffff;
  width: auto;
  height: auto;
  border: 0.763889px solid #943cca;
  border-radius: 3.05556px;
  background:linear-gradient(93.62deg, #3C0B63 1.06%, #C11BB9 147.09%);;
  color: #ffffff;
  position: relative;
  top: 10px;
}
#menu {
  background-color: rgba(0, 0, 0, 0.766);
position: fixed;
width: 100%;
  color: #ffffff;
  z-index: 6;
  /* height: 20px; */
  /* padding-left: 18px; */
}
#menu ul,
#menu li {
  list-style: none;
}
#menu ul {
  width: 100%;
}
#menu li {
  display: inline-block;
  position: relative;
  margin-left: 3.5%;
  z-index: 2;
  background-color: rgb(0, 0, 0);
}
#menu a {
  cursor: pointer;
  display: inline-block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  z-index: 2;
  color: #ffffff;
}

#menu li a:hover {
  color: white;
  background: transparent;
  text-decoration: underline;
}
#menu input {
  display: none;
  margin: 0;
  padding: 0;
  width: 10%;
  opacity: 0;
  height: 50px;
  cursor: pointer;
  float: left;
}
#menu label {
  display: none;
  line-height: 43px;
  text-align: center;
  position: absolute;
  left: 0px;
}
#menu a.dropdown-arrow:after {
  content: "\25BE";
  margin-left: 5px;
}
#menu label:before {
  font-size: 1.6em;
  content: "\2261";
  margin-left: 20px;
  float: right;
}
#menu ul.sub-menus {
  height: auto;
  overflow: hidden;
  width: 170px;
  background: transparent;
  position: absolute;
  display: none;
  z-index: 7;
}
#menu ul.sub-menus li {
  display: block;
  width: 100%;
  z-index: 2;
}
#menu ul.sub-menus a {
  color: #575757;
  font-size: 16px;
  z-index: 7;
}
#menu li:hover ul.sub-menus {
  display: block;
}
#menu ul.sub-menus a:hover {
  background: #ffffff;
  color: #000000;
}
@media screen and (max-width: 840px) {
    #menu ul.sub-menus {
    width: 100%;
    position: static;
  }
  #menu ul.sub-menus a {
    padding-left:0;
  }
  #menu {
    position: absolute;
    top: -10px;
  }
  .sl-container {
    float: right;
  }
  .sl-logo {
    margin-left: 0;
  }
  .connect-button {
    float: none;
  }
  #menu ul {
    background: transparent;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    width: 80%;
    height: auto;
    display: none;
  }
  #menu li {
    display: block;
    float: left;
    width: 60%;
    padding-top: 10px;
    

  }
  #menu input,
  #menu label {
    position: absolute;
    top: 30px;
    left: 0;
    display: block;
    color: white;
    float: left;
  }
  #menu input {
    color: white;
    z-index: 2;
  }
  #menu input:checked + label {
    color: white;
  }
  #menu input:checked + label:before {
    content: "\00d7";
  }
  #menu input:checked ~ ul {
    display: block;
  }.connect-button{
    top: 0px;
  }
}
</style>
