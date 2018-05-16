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
      <img src="../assets/img/ms.svg.png" width="100%">
      <img src="../assets/img/coke.svg" class="ms-coke" width="101%">
      <div class="ms-cont">
        <p class="ms-matchday">Matchday {{ matchday }}</p>
        <div class="ms-coke-team">
          <div id="localTeam" :style="{ backgroundImage: 'url(' + localTeam.flag + ')' }"></div>
          <p>{{ localTeam.name }}</p>
          <p>{{ visitorTeam.name }}</p>
          <div id="visitorTeam" :style="{ backgroundImage: 'url(' + visitorTeam.flag + ')' }"></div>
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
    }
	}
</script>

<style lang="scss">
  @import '../sass/app.scss';
  #localTeam, #visitorTeam {
    height: 130px;
    width: 205px;
    content: "";
    background-color: black;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-height: 500px) {
    #localTeam, #visitorTeam {
      height: 85px;
      width: 115px;
    }
  }
</style>