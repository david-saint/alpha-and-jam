<template>
	<div class="container">
		<div class="content">
			<div class="fifa-s">
				<img src="../assets/img/rectangle.png" id="cup" >
				<img src="../assets/img/typo.png" id="type">
			</div>
			<div class="coke">
				<p>Rep <br> Naija <br> with a</p>
				<img src="../assets/img/coke_bottle.png" id="coke_bottle">
				<p>bottle <br> of <br> coca cola</p>
			</div>
			<div class="cb" style="text-align: center;">
				<img src="../assets/img/coke-flat.png" alt="" id="">
			</div>
		</div>
		<div class="left">
			<div class="items">
				<ul>
					<li v-for="image in leftImages"><img :src="image" alt="" class="ig_images"></li>
				</ul>
			</div>
		</div>
		<div class="right">
			<div class="items">
				<ul>
					<li v-for="image in rightImages"><img :src="image" alt="" class="ig_images"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('getSupportersImages');
  },
  mounted() {},
  computed: {
    leftImages() {
      return this.$store.getters.naijaImages.filter((value, index) => (index % 2) == 0);
    },
    rightImages() {
      return this.$store.getters.naijaImages.filter((value, index) => (index % 2) == 1);
    }
  }
}
</script>

<style lang="scss">
	@import '../sass/naija_supporters.scss'
</style>