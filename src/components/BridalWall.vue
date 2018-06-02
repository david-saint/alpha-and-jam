<template>
  <div class="container">
    <img src="../assets/img/logo.svg" class="logo"/>

    <div class="bride">
      <ul>
        <li class="items" v-for="image in images" :style="{backgroundImage: `url(${image})`}"></li>
      </ul>
    </div>

    <div class="bail">
      <img src="../assets/img/bail.svg" />
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('getWallImages');
  },
  computed: {
    images() {
      const getRandom = (array = this.$store.getters.wallImages, n = 6) => {
        const shuffled = array.sort(() => .5 - Math.random());// shuffle  
        return shuffled.slice(0,n); // return n unique elements
      }
      // repeat this recursively every 30 seconds
      setTimeout(function () {
        // recursively call this function
        getRandom();
      }, 10000);
      return getRandom();
    }
  }
}
</script>

<style>
  body {
    overflow: hidden;
    margin: 0;
    height: 100vh;
  }
  .container {
    display: flex;
    height: 100vh;
  }

  .logo {
    top: 0;
    padding-left: 82px;
    padding-top: 62px;
    position: absolute;
  }

  .bride {
    height: 100%;
    width: 65%;
    overflow: hidden;
  }
  .bride ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    in-width: 0;
  }
  .bride ul li {
    padding: 0px;
    text-align: center;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .items {
    transition: background 1.5s ease-in-out;
  }
  .bail {
    right: 0;
    height: 100vh;
    overflow: hidden;
    position: absolute;
  }

  .bride img {height: 100%;}
  .bail img {height: 100%;}
</style>