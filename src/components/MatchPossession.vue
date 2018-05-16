<template>
	<div>
    <!-- The Time -->
    <center>
      <div class="timebox">8</div>
      <div class="timebox">5</div>
      <div class="separator">:</div>
      <div class="timebox">1</div>
      <div class="timebox">7</div>
    </center>

    <center>
      <div class="container">
        <div>
          <img src="../assets/svg/nga.svg" class="country">
        </div>
        <div class="grid-container">
          <div class="grid-item home">1</div>
          <div class="grid-item goal">
            <img src="../assets/svg/goal.svg" class="goal" alt="Goal Post">
          </div>
          <div class="grid-item away away">0</div>
          <div class="grid-item possession">
            <strong class="possession">45%</strong>
          </div>
          <div class="grid-item">
            <img src="../assets/svg/p.svg" class="players">
          </div>
          <div class="grid-item possession">
            <strong class="possession">55%</strong>
          </div>
        </div>
        <div>
          <img src="../assets/svg/arg.svg" class="country">
        </div>
      </div>
    </center>

    <!-- Russia World Cup Image -->
    <div class="russia">
      <img src="../assets/svg/russia.svg" alt="Russia 2018">
    </div>

    <!-- cocacola Image-->
    <div class="cocacola">
      <img src="../assets/svg/sponsors.svg" class="cocacola" alt="cocacola">
    </div> 
  </div>
</template>

<script>
	export default {

	}
</script>

<style>
	body {
    background-image: url('../assets/img/bg.png');
    background-color: #ED2F23;
    margin-top: -15;
  }

  .russia {
    position: absolute;
    bottom: 10px;
    padding: 25px;
  }

  .russia img {
    width: 300px;
  }

  .cocacola {
    position: absolute;
    bottom: 10px;
    right: 0;
    padding: 25px;
  }

  .cocacola img {
    width: 400px;
  }

  .timebox {
    width:100px;
    height:130px;
    background:#ffffff;
    padding: 5px;
    display: inline-block;
    position: relative;
    text-align: center;
    top: -24px;
    color: #EB2F23;
    font-family: Montserrat;
    font-style: medium;
    font-weight: 500;
    font-size: 120.096px;
    letter-spacing: 100px;
    border-radius: 4%;
  }

  .separator {
    color: #ffffff;
    display: inline-block;
    top: -30;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: 97px;
    font-size: 120.096px;
    margin-top: 0;
    position: relative;
    text-align: center;
  }

  .goal {
    display: inline-block;
  }

  .country {
    width: 350px;
    height: 350px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    in-width: 0;
  }

  .grid-item {
    padding: 20px;
    font-size: 30px;
    text-align: center;
    bottom: 10px;
    /* border: 1px solid rgba(0, 0, 0, 0.8); */
  }

  .goal {
    width: 150px;
    height: 150px;
  }

  .players {
    width: 150px;
    height: 150px;
    margin-top: -50;
  }

  .home {
    font-family: Montserrat;
    font-size: 110px;
    letter-spacing: 35.7442px;
    color: #FFFFFF;
  }

  .away {
    font-family: Montserrat;
    font-size: 110px;
    letter-spacing: 35.7442px;
    color: #FFFFFF;
  }

  .possession {
    Font-Family: Montserrat;
    Font-Size: 50;
    top: -40;
    Font-Style: normal;
    color: #ffffff;
    font-weight: bolder;
    font-style: bolder;
    font-size: 80.096px;
  }

  .container {
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: -200;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 100px;
    margin: auto;
  }
</style>