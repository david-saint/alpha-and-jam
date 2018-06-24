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
        <div class="right">
          <img src="../assets/img/coke-bottle-copy.png" alt="" id="coke-bottle">
          <!-- <svg class="svg" viewBox="0 0 183 118" fill="#FFFFFF">
            <clipPath id="clip-path">
              <path d="M169.719 0L10.2187 1C4.54612 27.0102 1.39997 42.3545 0.218719 69.5C-0.443918 85.8844 0.547873 95.1154 1.2187 113.5C61.028 117.34 101.666 117.367 182.219 115V91V74V65.5V58.5L180.719 48.5L178.219 37L176.219 25.5L173.719 15.5L171.719 7.5L169.719 0Z" transform="translate(0.281281 0.5)" fill="#C4C4C4"/>
            </clipPath>
            -<image clip-path="url(#clip-path)" :xlink:href="localTeam.flag"  :src="localTeam.flag" alt="Image" width="100%" class="svg__image" />-
            <image clip-path="url(#clip-path)" :xlink:href="require(`../assets/img/${team}.png`)"  :src="require(`../assets/img/${team}.png`)" alt="Image" width="100%" class="svg__image" />
          </svg> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
    props: ['score', 'assist', 'time', 'team', 'origin'],
    mounted() {
      setTimeout(() => {
        window.location.href = `/${this.origin}` // or naija-supporters
      }, 20000);
    }
  }
</script>

<style lang="scss">
@import '../sass/goal_page.scss'
</style>