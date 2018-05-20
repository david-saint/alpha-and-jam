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
  }
  .container {
    display: flex;
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
    overflow: hidden;
    position: absolute;
  }
</style>