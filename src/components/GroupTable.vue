<template>
	<transition>
		<div class="container">
			<div class="content">
				<div class="top">
					<div class="fifa-s">
						<img src="../assets/img/rectangle.png" id="cup" >
						<img src="../assets/img/typo.png" id="type">
					</div>
					<div class="coke-ish">
						<img src="../assets/img/coke-flat.png" alt="" id="coke-ish">
					</div>
				</div>
				<div class="bottom">
					<div class="left"><img src="../assets/img/coke-bottle-copy.png" alt=""></div>
					<div class="table">
						<h1 class="center">{{ groupName }}</h1>
						<hr width="100%">
						<table>
							<thead>
								<tr>
									<th></th>
									<th><h1>PL</h1></th>
									<th></th>
									<th><h1>W</h1></th>
									<th><h1>D</h1></th>
									<th><h1>L</h1></th>
									<th><h1>points</h1></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="team in groupTeams">
									<td><h1>{{ team.name }}</h1></td>
									<td class="white"><h1>{{ team.played }}</h1></td>
									<td><h1></h1></td>
									<td class="white"><h1>{{ team.won }}</h1></td>
									<td class="white"><h1>{{ team.drawn }}</h1></td>
									<td class="white"><h1>{{ team.lost }}</h1></td>
									<td><h1>{{ team.points }}</h1></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="right"><img src="../assets/img/coke-bottle-copy.png" alt=""></div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
    beforeCreate() {
      this.$store.dispatch('getGroupInfo');
    },
    mounted() {
    },
    computed: {
      groupName() {
        return this.$store.getters.groupTableName
      },
      groupTeams() {
        return this.$store.getters.groupTableTeams.sort((a,b) => a.position - b.position);
      }
    }
	}
</script>

<style lang="scss">
	@import '../sass/group_table.scss'
</style>