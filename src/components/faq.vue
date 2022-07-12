<template>
  <div class="faq" id="faq">
    <img src="@/assets/dots_1.png" alt="" class="dots_1" />
    <img src="@/assets/Vector_2.png" alt="" class="vector2-faq" />
    <img src="@/assets/Vector_4.png" alt="" class="vector_4" />
    <span class="faq-text">faq</span><br />
    <div class="faq-div">
      <div class="faq-div1">
        <span class="faq-question">How to start the trading ?</span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques1" />
      </div>
      <div class="answer-div" id="answer-div1">
        <h5 class="ans">Step 1: Make a cryptocurrency brokerage account.</h5>
        <h5 class="ans">Step 2: Fund your account.</h5>
        <h5 class="ans">Step 3: Pick a crypto to make investments in.</h5>
        <h5 class="ans">Step 4: Choose a strategy.</h5>
        <h5 class="ans">Step 5: Consider automatic crypto trading.</h5>
        <h5 class="ans">Step 6: Store your cryptocurrency.</h5>
      </div>

      <div class="faq-div1">
        <span class="faq-question">What is the best time to trade ?</span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques2"/>
      </div>
      <div class="answer-div" id="answer-div2">
        <h5 class="ans">
          Most cryptocurrency exchanges in India allow traders to trade all day,
          even on weekends. But according to the statistics, from midnight till
          4:00 am seems to be even more beneficial.
        </h5>
      </div>
      <div class="faq-div1">
        <span class="faq-question">Is this project audited ?</span>
        <img src="@/assets/plus1.png" alt="" class="plus-png" @click="ques3" />
      </div>
      <div class="answer-div" id="answer-div3">
        <h5 class="ans">
          Yes, We have been audited by Coinscope (Level 1 Audit) & Techrate (Level 2)
        </h5>
      </div>
    </div>
    <img src="@/assets/Vector_2.png" alt="" class="vector_2" />
    <span class="email-text"
      >“ If you would like to receive updates about our projects, including
      dates & procedures for the upcoming ITO. Please register here.”</span
    ><br />
    <div class="email-box">
      <img src="@/assets/dots_1.png" alt="" class="dots_1" />
      <div class="email-box-content">
        <input
          class="email-box-text"
          placeholder="enter your email address"
          type="email"
        />
        <button class="email-box-button">Send</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    ques1() {
      let box = document.getElementById("answer-div1");
      console.log("ffff");
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
      console.log("ffff");
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
      console.log("ffff");
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
.vector2-faq{
    position: absolute;
    top: 9050px;
    left: -1%;
    right: 1%;
    width: 100%;
    opacity: 0.3;
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
.email-box-button {
  box-sizing: border-box;
  left: 70%;
  position: absolute;
  right: 0%;
  top: 0%;
  bottom: 0%;
  color: white;

  background: linear-gradient(94.96deg, #14003e 0.95%, #943cca 109.33%);
  border-radius: 7.63889px;
}
.email-box-text {
  position: absolute;
  width: 365.79px;
  height: 16.81px;
  left: 0%;
  top: 0%;
  padding: 28px;

  background: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20.2778px;
  line-height: 23px;
  text-transform: capitalize;
  border-width: 0px;
  color: #ffffff;

  transform: rotate(0.17deg);
}
.email-box-content {
  position: absolute;
  left: 10.78%;
  right: 10.67%;
  top: 15%;
  bottom: 15%;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(142, 0, 255);
  border-radius: 7.63889px;
}
.email-box {
  position: relative;
  width: 770.76px;
  height: 108.47px;
  left: 23%;
  top: 300px;
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
  left: 81%;
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
  top: 200px ;

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
  top: 100px;
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
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 26.7361px;
  line-height: 40px;
  text-transform: uppercase;

  color: #ffffff;
}
@media screen and (max-width: 800px){
    .email-box{
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        left: 0;
        right: 0;
    }.email-box-text{
        width: 60%;
        font-size: 10px;
    }.faq-div{
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }.faq-div1{
        min-height: 60px;
        max-height: 80px;
    }.faq-question{
        top: auto;
    }.answer-div{
        width: 70%;
    }.email-box{
        height: 40px;
    }.email-box-text{
        padding: 0;
        width: 65%;
        top: 12%;
        left: 5%;
    }
}
</style>