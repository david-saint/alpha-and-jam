<template>
	<div class="container">
		<img src="../assets/img/logo.svg" class="logo"/>

    <div class="bride">
      <img src="../assets/img/bride.png" />
    </div>

    <div class="bail">
      <img src="../assets/img/bail.svg" />
    </div>
	</div>
</template>

<script>
	export default {
    mounted() {
      let t = this.$store.getters.indexTime;
      setTimeout(() => {
        window.location.href = '/'
      }, t);
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