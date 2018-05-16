<template>
	<div class="container">
		<div class="left">
			<p>The Time is</p>
			<div class="time">
				<p id="time">{{ time }}</p>
				<p class="label"><span>Hr</span> <span>Mins</span> <span>Sec</span></p>
			</div>
		</div>
		<div class="walking">
			<div id="right_leg" :style="{left: rightLeg.position + 'px', transform: 'rotate(' + rightLeg.degree + 'deg)'}"><img src="../assets/img/right_leg.png" alt=""></div>
			<div id="left_leg" :style="{left: leftLeg.position + 'px', transform: 'rotate(' + leftLeg.degree + 'deg)'}"><img src="../assets/img/left_leg.png" alt=""></div>
		</div>
		<div class="drink">
			<img src="../assets/img/drink_iq.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        time: '',
        rightLeg: {
          degree: 35,
          position: -60
        },
        leftLeg: {
          degree: -35,
          position: 60
        }
      }
    },
    mounted() {
      this.digitalTime()
    },
    methods: {
      digitalTime() {
        // set INtervel for every second
        setInterval(() => {
          // create a new date instance
          const date = new Date();
          // get the hour
          let hours = (date.getHours() < 10) ? '0'+date.getHours() : date.getHours();
          // get the minute
          let minutes = (date.getMinutes() < 10) ? '0'+date.getMinutes() : date.getMinutes();
          // get the second
          let seconds = (date.getSeconds() < 10) ? '0'+date.getSeconds() : date.getSeconds();
          // update the data
          this.time = `${hours}:${minutes}:${seconds}`;
          // update the leg positions
          this.rightLeg.degree = this.rightLeg.degree * (-1);
          // update the leg positions
          this.rightLeg.position = this.rightLeg.position * (-1);
          // update the leg positions
          this.leftLeg.degree = this.leftLeg.degree * (-1);
          // update the leg positions
          this.leftLeg.position = this.leftLeg.position * (-1);
        }, 1000);
      }
    }
	}
</script>

<style lang="scss">
	@import '../sass/johnnie_walker.scss'
</style>