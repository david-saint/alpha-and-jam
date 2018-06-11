<template>
  <div class="container">
    <div class="left" style="background-image: url(../assets/img/ikoyi.png);">
      <img src="../assets/img/ikoyi.png" alt="">
      <span></span>
    </div>
    <div class="right">
      <div class="top">
        <div class="t">
          <p>Osborne Lagos Nigeria</p>
          <div class="candleLogo"><p>CANDLE</p></div>
        </div>
        <div class="m">
          <p><span style="color: #D93600;">"</span>The Traffic ahead seems to be excessive. Why not try a different route.<span style="color: #D93600;">"</span></p>
        </div>
        <div class="b">
          <p>Wherever you go, there are three icons that everyone knows: Jesus Christ, Messi and Coca-Cola.</p>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li><i class="material-icons" style="color: #D93600;">directions_car</i> 10 mins</li>
          <li><i class="material-icons" style="color: #D93600;">directions_railway</i> 20 mins</li>
          <li><i class="material-icons" style="color: #D93600;">directions_walk</i> 50 mins</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['from', 'to'],
    created() {
      const origin = {
        long: parseFloat(this.from.split(',')[0]),
        lat: parseFloat(this.from.split(',')[1])
      }
      const destination = {
        long: parseFloat(this.to.split(',')[0]),
        lat: parseFloat(this.to.split(',')[1])
      }
      this.$store.dispatch('getTrafficStat', { origin, destination });
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
    height: 20px;
    background-color: #D93600;
    z-index: 2;
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
          font-weight: 300;
          font-size: 48px;
          margin-bottom: 0;
        }
        .candleLogo {
          height: 120px;
          width: 325px;
          margin-right: -2px;
          text-align: center;
          vertical-align: middle;
          background-color: #D93600;

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
  }
</style>