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
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
				</ul>
			</div>
		</div>
		<div class="right">
			<div class="items">
				<ul>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
					<li><img src="https://scontent-mia3-2.cdninstagram.com/vp/8aed6a1ac5fea338ed51206f5f3ec31d/5B8A38BF/t51.2885-15/e35/29740498_777293379132503_951007906541600768_n.jpg" alt="" class="ig_images"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    mounted() {
      let t = this.$store.getters.indexTime;
      setTimeout(() => {
        window.location.href = '/rolex'
      }, t);
    }
	}
</script>

<style lang="scss">
	@import '../sass/naija_supporters.scss'
</style>