<template>
  <div class="faq" id="faq">
    <img src="@/assets/dots_1.png" alt="" class="dots_1" /> 
    <img src="@/assets/Vector_2.png" alt="" class="vector2-faq" />
    <img src="@/assets/Vector_4.png" alt="" class="vector_4" />
    <span class="faq-text">faq</span><br />
    <div class="faq-div">
      <div class="faq-div1">
        <span class="faq-question"
          >How to buy SLN from the presale dashboard?</span
        >
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques1" />
      </div>
      <div class="answer-div" id="answer-div1">
        <h5 class="ans">
          Visit https://www.silverlineswap.org/ and enter USDT Amount that you
          want to purchase
        </h5>
      </div>

      <div class="faq-div1">
        <span class="faq-question">What is the price of the token?</span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques2" />
      </div>
      <div class="answer-div" id="answer-div2">
        <h5 class="ans">The price of the token is $0.0013(10paise INR)</h5>
      </div>
      <div class="faq-div1">
        <span class="faq-question">How do I use my SLN tokens? </span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques3" />
      </div>
      <div class="answer-div" id="answer-div3">
        <h5 class="ans">
          You can Use SLN Tokens for Staking, farming, pooling
        </h5>
      </div>
      <div class="faq-div1">
        <span class="faq-question"
          >Where do I find the contract address of the SLN token?
        </span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques4" />
      </div>
      <div class="answer-div" id="answer-div4">
        <h5 class="ans">
          Silverline Token Address :- 0x40491520d7BdcdD670cf387902BaD615ab65f43B
        </h5>
      </div>
      <div class="faq-div1">
        <span class="faq-question"
          >When are we adding liquidity?
        </span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques5" />
      </div>
      <div class="answer-div" id="answer-div5">
        <h5 class="ans">
         A week after completion of presale 
        </h5>
      </div>
      <div class="faq-div1">
        <span class="faq-question"
          >What are the benefits of buying early?
        </span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques6" />
      </div>
      <div class="answer-div" id="answer-div6">
        <h5 class="ans">
         High Purchase Limit - Purchase a higher number of tokens from Presale
        </h5>
        <h5 class="ans">Lowest Price - Buy Tokens at a minimum price ever</h5>
        <h5 class="ans">Early Bird - Enjoy the peaks of being an early adopter of the technology</h5>
      </div>
    </div>
    <img src="@/assets/Vector_2.png" alt="" class="vector_2" />
    <!-- <img src="@/assets/dots_1.png" alt="" class="dots_1" /> -->
    
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    ques1() {
      let box = document.getElementById("answer-div1");
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
    ques2() {
      let box = document.getElementById("answer-div2");
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
    ques3() {
      let box = document.getElementById("answer-div3");
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
    ques4() {
      let box = document.getElementById("answer-div4");
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
    ques5() {
      let box = document.getElementById("answer-div5");
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
    ques6() {
      let box = document.getElementById("answer-div6");
     
      if (box != null) {
        if (box.style.display != "none") {
          box.style.display = "none";
          console.log("ffff222");
        } else {
          console.log("ffff22233");
          box.style.display = "block";
        }
      }
    },
  },
})
export default class Faq extends Vue {}
</script>
<style>
.vector2-faq {
  position: absolute;
  top: 9700px;
  left: -1%;
  right: 1%;
  width: 100%;
  opacity: 0.1;
}
.answer-div {
  position: relative;
  left: 5%;
  right: 0%;
  width: 85%;
  height: auto;
  top: 0%;
  background-color: rgb(192, 192, 192);
  display: none;
  color: black;
  z-index: 0;
  padding: 20px;
  text-align: left;
}

.faq-question {
  position: absolute;
  top: 30%;
  width: 70%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19.0972px;
  line-height: 22px;
  text-transform: capitalize;
  color: #ffffff;
  left: 5%;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.plus-png {
  position: absolute;
  width: 38.96px;
  height: 35.53px;
  left: 90%;
  top: 20%;
  cursor: pointer;
  right: 0%;
}

.email-text {
  position: relative;
  width: 60%;
  height: 48.89px;
  left: 0%;
  right: 0;
  top: 200px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19.0972px;
  line-height: 22px;
  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
}
.faq-div2 {
  padding: 0px;
  position: absolute;
  left: 5%;
  right: 5%;
  text-align: left;
  top: 8%;
  bottom: 9.55%;
  height: 50px;
  border-width: 1px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
  border-radius: 7.63889px;
}
.faq-div1 {
  padding: 0px;
  position: relative;
  left: 5%;
  width: 90%;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);
  text-align: left;
  margin-top: 30px;
  bottom: 9.55%;
  height: 60px;
  top: 4%;
  border-width: 1px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
  border-radius: 7.63889px;
}
.faq-div {
  position: relative;
  width: 60%;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  top: 00px;
  padding-bottom: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255, 0.5);

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(142, 0, 255, 0.15) 137.15%
  );
  border-radius: 15.2778px;
}
.faq {
  position: static;
  top: 2600px;
  align-content: center;
  margin-top: 200px;
  
}
.faq-text {
  width: 59.58px;
  height: 25.21px;
  left: auto;
  right: auto;
  top: 10%;
  font-family:moderne;
  font-style: normal;
  font-weight: 800;
  font-size: 26.7361px;
  line-height: 40px;
  text-transform: uppercase;

  color: #ffffff;
}
@media screen and (max-width: 840px) {
  .email-box {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
  }
  .email-box-text {
    width: 60%;
    font-size: 10px;
  }
  .faq-div {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  .faq-div1 {
    min-height: 60px;
    max-height: 80px;
  }
  .faq-question {
    top: auto;
  }
  .answer-div {
    width: 70%;
  }.faq{
    margin-bottom: -150px;
    margin-top: 20px;
  }
  
}
</style>