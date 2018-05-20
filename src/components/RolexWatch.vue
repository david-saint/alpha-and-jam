<template>
	<div class="container">
    <div class="left">
      <img src="../assets/img/rolex_logo.png" alt="">
      <div class="time">
        <p>The <span>time</span> is </p> <div id="triangle"><img src="../assets/img/triangle.png" alt=""></div>
      </div>
      <p>Time is money, so I went and bought a rolex. <br> - Wiz Khalifa</p>
    </div>
    <div class="right">
      <p>By Rolex.</p>
    </div>
    <div class="watch">
      <div>
        <div id="hours"><img src="../assets/img/hour.png" alt=""></div>
        <div id="minutes"><img src="../assets/img/minute.png" alt=""></div>
        <div id="seconds"><img src="../assets/img/second.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    mounted() {
      this.watchAnimation();
      let t = this.$store.getters.indexTime;
      setTimeout(() => {
        window.location.href = '/johnnie'
      }, t);
    },
    methods: {
      watchAnimation() {
        // The current date/time
        const date = new Date();
        // set an intial second counter value
        let second = date.getSeconds();
        // set an initial minute counter value
        let minute = date.getMinutes();
        // set an initial hour counter vlaue
        let hour = date.getHours() + (minute / 60);

        // Get the second hand
        const secondHand = document.getElementById('seconds');
        // Get the second hand
        const minuteHand = document.getElementById('minutes');
        // Get the second hand
        const hourHand = document.getElementById('hours');

        // rotate the secondHand to the initial
        secondHand.style.transform = `rotate(${second * 6}deg)`;
        // rotate the minuteHand to the initial
        minuteHand.style.transform = `rotate(${minute * 6}deg)`;
        // rotate the hourHand to the initial
        hourHand.style.transform = `rotate(${hour * 30}deg)`;

        // Update the seconds on the clock every second
        const seconds = setInterval(function () {
          if ((second % 60) === 0) {
            // Increment the minute counter
            minute += 1;
            // Increment the hour counter
            hour += (1 / 60);
            // rotate the minuteHand to it
            minuteHand.style.transform = `rotate(${minute * 6}deg)`;
            // rotate the hourHand to it
            hourHand.style.transform = `rotate(${hour * 30}deg)`;
          }
          // increment the second counter value
          second += 1;
          // set the degree of rotation
          secondHand.style.transform = `rotate(${second * 6}deg)`;
        }, 1000);
      }
    }
	}
</script>

<style lang="scss">
  @import '../sass/rolex.scss';
</style>
