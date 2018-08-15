<template>
  <div class="contain">
    <div class="candle-logo">
      <svg width="240" height="65" viewBox="0 0 240 65" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="65" fill="black" fill-opacity="0"/><rect x="4.78638" y="8.21051" width="228.376" height="50.6316" fill="#FE2550"/><rect width="240" height="65" fill="black" fill-opacity="0"/><rect width="2400" height="650" fill="black" fill-opacity="0" transform="translate(0 65) scale(0.1 -0.1)"/><path d="M0 32.5V65H120H240V32.5V-9.68575e-07H120H0V32.5ZM38.4957 13.3421C42.8034 14.4368 47.8632 17.3105 47.8632 18.6789C47.8632 19.0895 46.7009 20.6632 45.4017 22.1L42.9402 24.7684L41.5043 23.4C39.1111 21.2105 36.9915 20.3895 33.8462 20.3895C27.8974 20.3895 23.9316 24.5632 23.9316 30.7211C23.9316 40.3684 32.6838 44.7474 40.8205 39.2053L43.3504 37.4947L45.6068 40.0947C46.8376 41.6 47.7265 43.0368 47.6581 43.4474C47.2479 44.5421 42.2564 47.6895 39.5897 48.5105C35.5556 49.7421 28.7863 49.4 25.2991 47.8263C18.8718 44.9526 15.1111 39.4789 14.4957 32.3632C13.812 23.1947 19.7607 15.2579 29.1966 13.0684C32.9573 12.1789 34.188 12.1789 38.4957 13.3421ZM80.3419 28.8737C84.0342 37.6316 87.453 45.8421 88 47.0737L88.9573 49.3316L84.0342 49.1263L79.1795 48.9211L77.9487 45.8421L76.718 42.7632L71.8633 42.5579C67.1453 42.3526 66.9402 42.2842 67.3504 40.8474C68.6496 36.1947 69.1282 35.5789 71.5897 35.5789C73.5727 35.5789 73.9145 35.3737 73.5043 34.3474C73.2308 33.7316 72.0684 30.7895 70.9744 27.8474C69.812 24.9053 68.6496 22.7158 68.3761 23.0579C68.1026 23.3316 65.641 29.3526 62.906 36.4L57.9145 49.2632H53.1966H48.547L49.5043 47.0053C53.1282 38.5211 63.7265 13.9579 64 13.5474C64.2051 13.2737 66.4615 13 68.9915 13H73.641L80.3419 28.8737ZM109.06 24.1526L117.265 35.2368L117.47 24.0842L117.607 13H121.709H125.812V31.1316V49.2632H121.846H117.88L109.744 38.3158L101.538 27.3L101.333 38.3158L101.197 49.2632H96.7521H92.3077V31.1316V13H96.6154L100.855 13.0684L109.06 24.1526ZM155.35 13.6842C162.598 15.7368 167.521 21.8947 168.068 29.4895C168.479 34.9632 167.179 39.0684 164.034 42.6947C159.453 47.8947 156.581 48.7842 144.137 49.1263L133.333 49.4V31.2V13H143.111C148.444 13 153.983 13.3421 155.35 13.6842ZM182.564 27.3684V41.7368H190.427H198.291V45.5V49.2632H185.983H173.675V31.1316V13H178.12H182.564V27.3684ZM231.111 16.4211V19.8421H216.752H202.393V16.4211V13H216.752H231.111V16.4211ZM229.06 31.1316V34.8947H220.513H211.966V38.6579V42.4211H221.88H231.795V45.8421V49.2632H217.094H202.393V38.3158V27.3684H215.726H229.06V31.1316Z" fill="#1C2232"/><path d="M142.769 20.2526C142.427 20.5263 142.222 25.4526 142.222 31.2684V41.7368H147.214C152.889 41.7368 154.94 40.9158 157.06 37.7684C159.453 34.1421 159.795 30.0368 157.88 26.2052C155.556 21.6894 153.573 20.3894 147.897 20.0473C145.367 19.8421 143.043 19.9105 142.769 20.2526Z" fill="#1C2232"/></svg>
    </div>

    <div class="time">
      <h1>{{ time.hour }}<span>{{ time.minute }}</span><span class="tiny">{{ time.section }}</span></h1>
      <p>{{ date.day }}</p>
    </div>

    <div class="date">
      <p>{{ date.value }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: {
          hour: 12,
          minute: 52,
          section: 'pm'
        },
        date: {
          value: '',
          day: ''
        }
      }
    },
    mounted() {
      this.digitalTime();
    },
    methods: {
      digitalTime() {
        // set INtervel for every second
        setInterval(() => {
          // Days of the week
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          // Months in the year
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          // create a new date instance
          const date = new Date();
          // fomat the hour
          let h = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
          // get the hour
          let hours = (h < 10) ? '0'+h : h;
          // get the minute
          let minutes = (date.getMinutes() < 10) ? '0'+date.getMinutes() : date.getMinutes();
          // get the section
          let sections = (date.getHours() > 11) ? 'pm' : 'am';
          // update the data
          this.time = { hour: hours, minute: minutes, section: sections };
          // update the day
          this.date = { day: days[date.getDay()], value: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` };
        }, 1000);
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Oswald:300,500,700');

  body {
    background-color: #1C2232;
    padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
  }
  .contain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    height: 100vh;

    .candle-logo {
      padding: 20px;
    }

    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-weight: 700;
        color: #ffffff;
        font-size: 500px;
        line-height: 1;
        margin: 0;

        span {
          font-weight: 300;
          color: #FE2550;
          font-size: 250px;
          margin: 0 20px;

          &.tiny {
            font-weight: 700;
            color: #ffffff;
            font-size: 48px;
            margin: 0;
            text-transform: uppercase;
          }
        }
      }
      p {
        color: #FE2550;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 48px;
        text-align: center;
        letter-spacing: 20px;
        margin: 20px 0;
      }
    }

    .date {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

      p {
        margin: 0;
        color: #FE2550;
        font-size: 48px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .contain {
      .candle-logo {padding: 8px;}
      .time {
        h1 {
          font-size: 250px;
          span {
            font-size: 125px;
            margin: 0 8px;

            &.tiny {
              font-size: 24px;
            }
          }
        }
        p {
          font-size: 24px;
          letter-spacing: 10px;
          margin: 8px 0;
        }
      }
      .date {
        padding: 8px;

        p {font-size: 24px;}
      }
    }
  }
</style>