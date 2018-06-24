<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/left_bottleb.png" height="100%">
      <!-- <div>
        <svg class="svg" viewBox="0 0 413 335"  fill="#FFFFFF">
          <clipPath id="clip-path">
            <path d="M594.402 0H184.402L4.40259 0.5C-3.63624 130.944 0.626624 200.983 6.90202 325.5L184.402 332.5L369.402 334L593.402 326L594.402 273V225C594.952 199.616 596.865 168.384 596.402 143V69L594.402 0Z" transform="translate(-184.403 0.5)" fill="#C4C4C4"/>
          </clipPath>
          <image clip-path="url(#clip-path)" :xlink:href="require(`../assets/img/${firstTeam.id}.png`)"  :src="require(`../assets/img/${firstTeam.id}.png`)" alt="Image" class="svg__image" />
        </svg>
      </div> -->
    </div>
    <div class="content">
      <div class="top">
        <img src="../assets/img/vea.svg" width="100%">
        <p>{{minutes[0]}}{{minutes[1]}}:{{seconds[0]}}{{seconds[1]}}</p>
      </div>
      <div class="center">
        <div class="t">
          {{firstTeam.name}} vs {{secondTeam.name}} - Live
        </div>
        <div class="b">
          <div>
            <p class="time">{{ comment.minute }}"</p> <p>{{ comment.text }}</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <img src="../assets/img/xea.svg" width="100%">
        <div class="score">
          <img :src="require(`../assets/img/${firstTeam.id}.png`)" class="circle">
          <p>{{ firstTeam.score }} - {{ secondTeam.score }}</p>
          <img :src="require(`../assets/img/${secondTeam.id}.png`)" class="circle">
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/img/right_bottleb.png" height="100%">
      <!-- <div> 
        <svg class="svg" viewBox="0 0 438 335"  fill="#FFFFFF">
          <clipPath id="clip-path2">
            <path d="M594.402 0H184.402L4.40259 0.5C-3.63624 130.944 0.626624 200.983 6.90202 325.5L184.402 332.5L369.402 334L593.402 326L594.402 273V225C594.952 199.616 596.865 168.384 596.402 143V69L594.402 0Z" transform="translate(596.474 0.5) scale(-1 1)" fill="#C4C4C4"/>
          </clipPath>
          <image clip-path="url(#clip-path2)" :xlink:href="require(`../assets/img/${secondTeam.id}.png`)"  :src="require(`../assets/img/${secondTeam.id}.png`)" alt="Image" class="svg__image" />
        </svg>
      </div> -->
    </div>
  </div>
</template>

<script>
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
       window.location.href = `/goal/${score}/${assist}/${time}/${team}/commentary`;
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
      },
      comment() {
        return this.$store.getters.matchComment
      }
    }
  }
</script>

<style lang="scss">
@import '../sass/live_commentary.scss'
</style>