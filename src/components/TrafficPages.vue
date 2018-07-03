<template>
  <div class="container">
    <div class="left" :style="{backgroundImage: `url(${require(`../assets/img/${image}.png`)})`}">
      <span :style="{ backgroundColor: color }">{{ routeName.name }}</span>
    </div>
    <div class="right">
      <div class="top" :style="{ borderRightColor: color }">
        <div class="t">
          <p>{{ origin }}</p>
          <div class="candleLogo"><img src="../assets/img/cand.png" alt=""></div>
        </div>
        <div class="m">
          <p><span :style="{ color: color }">"</span>{{ text.main }}<span :style="{ color: color }">"</span></p>
        </div>
        <div class="b">
          <p v-html="text.sub"></p>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li><i class="material-icons" :style="{ color: color }">directions_car</i> {{ car }}</li>
          <li><i class="material-icons" :style="{ color: color }">directions_railway</i> {{ train }}</li>
          <li><i class="material-icons" :style="{ color: color }">directions_walk</i> {{ walk }}</li>
        </ul>
        <div><p>Sponsored By:</p> <img src="../assets/img/rollie.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { goodRef, mediumRef, badRef, routesRef } from '../firebase'

  export default {
    props: ['from', 'to'],
    data() {
      return {
        searchRoute: ''
      }
    },
    created() {
      const origin = {
        long: parseFloat(this.from.split(',')[0]),
        lat: parseFloat(this.from.split(',')[1])
      }
      const destination = {
        long: parseFloat(this.to.split(',')[0]),
        lat: parseFloat(this.to.split(',')[1])
      }
      this.searchRoute = `${origin.long}-${origin.lat}|${destination.long}-${destination.lat}`;
      this.$store.dispatch('getTrafficStat', { origin, destination });
    },
    firebase: {
      goodTexts: goodRef,
      mediumTexts: mediumRef,
      badTexts: badRef,
      route: routesRef
    },
    computed: {
      routeName() {
        return this.route.find(value => ( value.origin.longitude == parseFloat(this.from.split(',')[0]) &&
                                          value.origin.latitude == parseFloat(this.from.split(',')[1]) &&
                                          value.destination.longitude == parseFloat(this.to.split(',')[0]) &&
                                          value.destination.latitude == parseFloat(this.to.split(',')[1]) ));
      },
      origin() {
        return this.$store.getters.trafficOrigin;
      },
      color() {
        return this.$store.getters.trafficColor;
      },
      car() {
        return this.$store.getters.trafficCar;
      },
      train() {
        return this.$store.getters.trafficTrain;
      },
      walk() {
        return this.$store.getters.trafficWalk
      },
      text() {
        if (this.$store.getters.trafficColor == '#27AE60') {
          let gt = this.goodTexts.filter(value => value.route == this.searchRoute);
          let index = Math.floor(Math.random() * gt.length);
          return gt[index] ? gt[index] : { main: 'loading...', sub: 'loading...'};
        }
        if (this.$store.getters.trafficColor == '#F2C94C') {
          let mt = this.mediumTexts.filter(value => value.route == this.searchRoute);
          let index = Math.floor(Math.random() * mt.length);
          return mt[index] ? mt[index] : { main: 'loading...', sub: 'loading...'};
        }
        if (this.$store.getters.trafficColor == '#D93600') {
          let bt = this.badTexts.filter(value => value.route == this.searchRoute);
          let index = Math.floor(Math.random() * bt.length);
          return bt[index] ? bt[index] : { main: 'loading...', sub: 'loading...'};
        }
      },
      image() {
        return `${parseFloat(this.from.split(',')[0])}${parseFloat(this.from.split(',')[1])}`
      }
    }
  }
</script>

<style lang="scss">
  body {
    background-color: white;
    height: 100vh;
    width: 100vw;
    margin:0;
    padding: 0;
    color: #333;
  }
  .container {
    height: 100vh;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
  }
  .left {
    height: 100vh;
    width: 30%;
    position: relative;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .left span {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
    font-size: 32px;
    color: white;
    display: block;
    padding: 20px 0;
    text-align: center;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  .right {
    width: 70%;
    height: 100vh;
    padding-left: 8%;
    background-position: top left;
    background-repeat: no-repeat;
    background-image: url(../assets/img/map.png);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .top {
      height: 80%;
      border-right: 25px solid #D93600;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .t {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p {
          font-family: 'Montserrat';
          font-weight: bold;
          font-size: 48px;
          margin-bottom: 0;
        }
        .candleLogo {
          height: 120px;
          text-align: center;
          vertical-align: middle;
          padding: 30px;

          p {margin-top: 30px; color: white;}
        }
      }

      .m {
        p {
          font-family: 'Playfair Display';
          font-size: 72px;
          font-weight: 400;
          padding-right: 40px;
        }
      }

      .b {
        p {
          font-family: 'Poppins';
          font-size: 48px;
          padding-right: 40px;
        }
      }
    }
  }
  .right .bottom {
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style: none;
      padding:0;
      li {
        display: inline-block;
        margin-right: 50px;
        font-size: 36px;
        font-family: 'Poppins';

        i.material-icons {
          font-size: 32px;
          margin-right: 10px;
          line-height: 0;
        }
      }
    }

    div {
      width: 380px;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      padding: 20px;

      p {
        font-size: 28px;
        font-family: 'Poppins';
        margin: 0;
      }
    }
  }

  @media only screen and (max-height: 500px) {
    .left span {
      font-size: 16px;
      padding: 10px 0;
    }
    .right .bottom {
      ul {
        li {
          font-size: 18px;
          i.material-icons {
            font-size: 16px;
          }
        }
      }

      div {
        width: 200px;
        p {
          font-size: 14px;
        }
        img {
          height: 40px;
        }
      }
    }

    .right {
      .top {
        .t {
          p {font-size: 24px;}
          .candleLogo {
            img {height: 50px; padding: 0px;}
          }
        }
        .m {
          p {
            font-size: 36px;
          }
        }
        .b {
          p {font-size: 24px;}
        }
      }
    }
  }
</style>