<template>
	<div class="container">
		<div class="countdown">
      <p>Countdown to kick-off</p>
      <p id="count">{{ time }}</p>
    </div>
    <div class="sponsors">
      <p>Russia 2018 World Cup Sposnsors</p>
      <img src="../assets/img/coke_flat.svg" alt="Coca-Cola" id="cocacola">
    </div>
    <div class="match-stat">
      <img src="../assets/img/aass.png" width="100%">
      <img src="../assets/img/coke.png" class="ms-coke" width="101%">
      <div class="ms-cont">
        <p class="ms-matchday">Matchday {{ matchday }}</p>
        <div class="ms-coke-team">
          <div id="localTeam">
            <svg class="svg" viewBox="0 0 183 118" fill="#FFFFFF">
              <clipPath id="clip-path">
                <path d="M169.719 0L10.2187 1C4.54612 27.0102 1.39997 42.3545 0.218719 69.5C-0.443918 85.8844 0.547873 95.1154 1.2187 113.5C61.028 117.34 101.666 117.367 182.219 115V91V74V65.5V58.5L180.719 48.5L178.219 37L176.219 25.5L173.719 15.5L171.719 7.5L169.719 0Z" transform="translate(0.281281 0.5)" fill="#C4C4C4"/>
              </clipPath>
              <!--<image clip-path="url(#clip-path)" :xlink:href="localTeam.flag"  :src="localTeam.flag" alt="Image" width="100%" class="svg__image" />-->
              <image clip-path="url(#clip-path)" :xlink:href="require(`../assets/img/${localTeam.id}.png`)"  :src="require(`../assets/img/${localTeam.id}.png`)" alt="Image" width="100%" class="svg__image" />
            </svg>
         </div>
         <p>{{ localTeam.name }}</p>
         <p>{{ visitorTeam.name }}</p>
         <div id="visitorTeam">
           <svg class="svg" viewBox="0 0 183 118" fill="none">
              <clipPath id="clip-path">
                <path d="M169.719 0L10.2187 1C4.54612 27.0102 1.39997 42.3545 0.218719 69.5C-0.443918 85.8844 0.547873 95.1154 1.2187 113.5C61.028 117.34 101.666 117.367 182.219 115V91V74V65.5V58.5L180.719 48.5L178.219 37L176.219 25.5L173.719 15.5L171.719 7.5L169.719 0Z" transform="translate(0.281281 0.5)" fill="#C4C4C4"/>
              </clipPath>
              <!-- <image clip-path="url(#clip-path)" :xlink:href="visitorTeam.flag"  :src="visitorTeam.flag" alt="Image" width="100%" class="svg__image" /> -->
              <image clip-path="url(#clip-path)" :xlink:href="require(`../assets/img/${visitorTeam.id}.png`)"  :src="require(`../assets/img/${visitorTeam.id}.png`)" alt="Image" width="100%" class="svg__image" />
            </svg>
         </div>
       </div>
       <p class="ms-details">
        {{ dateTime.time }} | {{ dateTime.date }} | Olimpiyskiy stadion Luzhniki
      </p>
    </div>
  </div>
  <div class="fifa-s">
    <img src="../assets/img/rectangle.png" id="fscup">
    <img src="../assets/img/typo.png" id="fscont">
  </div>
</div>
</template>

<script>
	export default {
    computed: {
      visitorTeam() {
        return this.$store.getters.countdownVisitorTeam;
      },
      localTeam() {
        return this.$store.getters.countdownLocalTeam;
      },
      dateTime() {
        return this.$store.getters.countdownDateTime;
      },
      matchday() {
        return this.$store.getters.countdownMatchday;
      },
      time() {
        return this.$store.getters.countdownTime;
      }
    },
    beforeCreate() {
      this.$store.dispatch('getCountdownInfo');
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
@import '../sass/app.scss';
#localTeam, #visitorTeam {
  height: 130px;
  width: 205px;
  content: "";
  background-color: transparent;
  background-size: cover;
  background-position: center;
  img {
    clip-path: url('../assets/img/vector.svg');
    overflow: hidden;
  }
}
.svg {height: 130px; width: 205px;}
@media only screen and (max-height: 500px) {
  #localTeam, #visitorTeam {
    height: 85px;
    width: 115px;
  }
  .svg {height: 88px; width: 116px;}
}
</style>