<template>
  <transition name="fade">
  	<div class="container">
      <div class="top">
        <div class="fifa-s">
          <img src="../assets/img/rectangle.png" id="cup" >
          <img src="../assets/img/typo.png" id="type">
        </div>
        <div class="coke-ish">
          <img src="../assets/img/coke-flat.png" alt="" id="coke-ish">
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="t">
            <span class="g">G</span>
            <span class="o" id="o1">O</span>
            <span class="o" id="o2">O</span>
            <span class="o" id="o3">O</span>
            <span class="a" id="a1">A</span>
            <span class="a" id="a2">A</span>
            <span class="a" id="a3">A</span>
            <span class="l" id="l1">L</span>
            <span class="l" id="l2">L</span>
            <span class="l" id="l3">L</span>
            <span class="ap" id="ap1">!</span>
            <span class="ap" id="ap2">!</span>
            <span class="ap" id="ap3">!</span>
          </div>
          <div class="b">
            <p>{{ time }}' <img src="../assets/img/ball.png" alt="" id="ball"> {{ score }} <br> <span>ASSIST - <b>{{ assist }}.</b></span></p>
          </div>
        </div>
        <div class="right"><img src="../assets/img/coke_bottle.png" alt="" id="coke-bottle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
    props: ['score', 'assist', 'time'],
    mounted() {
      setTimeout(() => {
        window.location.href = '/possession'// or naija-supporters
      }, 20000);
    }
	}
</script>

<style lang="scss">
	@import '../sass/goal_page.scss'
</style>