<template>
	<div>
    <!-- The Time -->
    <center>
      <div class="timebox">{{ minutes[0] }}</div>
      <div class="timebox">{{ minutes[1] }}</div>
      <div class="separator">:</div>
      <div class="timebox">{{ seconds[0] }}</div>
      <div class="timebox">{{ seconds[1] }}</div>
    </center>

    <center>
      <div class="container">
        <div class="crown">
          <img src="../assets/img/crown.png" class="country">
          <div class="c" :style="{backgroundImage: `url(${require(`../assets/img/${firstTeam.id}.png`)})`}"></div>
        </div>
        <div class="grid-container">
          <div class="grid-item home">{{ firstTeam.score }}</div>
          <div class="grid-item goal tesco">
            <img src="../assets/svg/goal.svg" class="goal" alt="Goal Post">
          </div>
          <div class="grid-item away away">{{ secondTeam.score }}</div>
          <div class="grid-item possession">
            <strong class="possession">{{ firstTeam.possession }}%</strong>
          </div>
          <div class="grid-item asda">
            <img src="../assets/svg/p.svg" class="players">
          </div>
          <div class="grid-item possession">
            <strong class="possession">{{ secondTeam.possession }}%</strong>
          </div>
        </div>
        <div class="crown">
          <img src="../assets/img/crown.png" class="country">
          <div class="c" :style="{backgroundImage: `url(${require(`../assets/img/${secondTeam.id}.png`)})`}"></div>
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
  import { bus } from '../bus'
  import { router } from '../routes/router'

	export default {
    data() {
      return {
        minute: '',
        second: ''
      }
    },

    beforeCreate() {
      this.$store.dispatch('getMatchStat');
    },

    mounted() {
      // listen for the goal-scored event
      bus.$on('goal-scored', (goals) => {
        // get the count of the goals
        let count = this.$store.getters.matchGoalsCount;
        // get the score 
        let score = goals.player_name ? goals.player_name : 'null';
        // get the assist
        let assist = goals.player_assist_name ? goals.player_assist_name : 'null';
        // get the time
        let time = goals.minute;
        // get the team id
        let team = goals.team_id;
        // redirect to the goal page
       window.location.href = `/goal/${score}/${assist}/${time}/${team}/possession`;
      });
    },

    computed: {
      firstTeam() {
        return this.$store.getters.matchFirstTeam
      },
      secondTeam() {
        return this.$store.getters.matchSecondTeam
      },
      minutes() {
        let m = (this.$store.getters.matchTime.minute) ? ((this.$store.getters.matchTime.minute < 10) ? '0' + this.$store.getters.matchTime.minute.toString() : this.$store.getters.matchTime.minute.toString()) : '00' ;
        return [...m]
      },
      seconds() {
        let s = (this.$store.getters.matchTime.second) ? ((this.$store.getters.matchTime.second < 10 ) ? '0' + this.$store.getters.matchTime.second.toString() : this.$store.getters.matchTime.second.toString()) : '00';
        return ([...s]);
      }
    },
	}
</script>

<style>
	body {
    background-image: url('../assets/img/bg.png');
    background-color: #ED2F23;
    margin-top: -10px;
  }

  .russia {
    position: absolute;
    bottom: 10px;
    padding: 25px;
  }

  .crown .c {
    position: absolute;
    top: 38px;
    left: 33px;
    height: 276px;
    width: 284px;
    background-color: red;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .russia img {
    width: 550px;
  }

  .cocacola {
    position: absolute;
    bottom: 10px;
    right: 0;
    padding: 25px;
  }
  .crown {
    margin: 0 50px;
    position: relative;
  }
  .cocacola img {
    width: 650px;
  }

  .timebox {
    width:100px;
    height:130px;
    background:#ffffff;
    padding: 5px;
    display: inline-block;
    position: relative;
    text-align: center;
    color: #EB2F23;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
    letter-spacing: 0px;
    border-radius: 10%;
  }

  .separator {
    color: #ffffff;
    display: inline-block;
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
  
  .tesco {
    border-bottom: 1px solid #fff;
  }
  
  .players {
    width: 150px;
    height: 150px;
    margin-top: -35px;
  }

  .home {
    font-family: Montserrat;
    font-size: 110px;
    letter-spacing: 35.7442px;
    color: #FFFFFF;
    border-bottom: 1px solid #fff;
  }

  .away {
    font-family: Montserrat;
    font-size: 110px;
    letter-spacing: 35.7442px;
    color: #FFFFFF;
    border-bottom: 1px solid #fff;
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
    top: -200px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 100px;
    margin: auto;
  }
  @media only screen and (max-height: 500px) {
    .timebox {width: 50px; height: 65px; padding: 3px; font-size: 50px;}
    .separator {line-height: 0px; font-size: 60px;}
    .country {width: 170px; height: 170px;}
    .home { font-size: 65px; }
    .away { font-size: 65px; }
    .goal {height: 75px; width: 75px;}
    .possession { font-size: 40px; }
    .russia img { height: 75px; }
    .cocacola img { height: 75px; }
    .container { top: -100px; }
    .crown { margin: 0 25px; }
    .crown .c { top: 16px; left: 16px; height: 138px; width: 138px; }
  }
</style>