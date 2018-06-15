<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/left-bottle.png" height="100%">
      <div class="image">
        <img :src="require(`../assets/img/${firstTeam.id}.png`)" height="100%">
      </div>
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
      <img src="../assets/img/right-bottle.png" height="100%">
      <div class="image">
        <img :src="require(`../assets/img/${secondTeam.id}.png`)" height="100%">
      </div>
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