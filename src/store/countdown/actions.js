export default {
	// gets the basic information needed for the countdown page
	getCountdownInfo({ commit, rootState, dispatch}) {
		// build the url 
		const url = `https://soccer.sportmonks.com/api/v2.0/seasons/892?api_token=${rootState.token}&include=stages.fixtures.localTeam,stages.fixtures.visitorTeam,stages.fixtures.round`;
		// use axios to call the url endpoint
		axios.get(url)
			.then(response => {
				// defactor the response
				const data = response.data.data.stages.data;
				// get data for the group stage
				const groupStage = data.find(val => val.id === 1733);
				// get the groupstage fixtures to come
				const fixtures = groupStage.fixtures.data.filter(value => {
					// convert the date to GMT
					let fixtureDate = new Date(`${value.time.starting_at.date_time} ${value.time.starting_at.timezone}`);
					// get current date
					let currentDate = new Date();
					// return true if the current time is less than the fixtures time
					return currentDate.getTime() <= fixtureDate.getTime();
				});
				// the first item is the needed match
				const match = fixtures[0];
				// get the date
				let matchDate = new Date(`${match.time.starting_at.date_time} ${match.time.starting_at.timezone}`)
				// created an object of the needed variables
				const obj = {
					matchday: match.round.data.name,
					date_time: {
						date: match.time.starting_at.date,
						time: `${matchDate.getHours()}:${(matchDate.getMinutes() < 10) ? '0' + matchDate.getMinutes().toString() : matchDate.getMinutes().toString()}`
					},
					localTeam: {
						name: match.localTeam.data.name,
						shortName: match.localTeam.data.short_code,
						flag: match.localTeam.data.logo_path
					},
					visitorTeam: {
						name: match.visitorTeam.data.name,
						shortName: match.visitorTeam.data.short_code,
						flag: match.visitorTeam.data.logo_path
					}
				}
				// commit the changes to a mutation
				commit('setCountdownState', obj);
				// dispatch the countdown time function
				dispatch('getCountdownTime', matchDate);
			})
			.catch(error => console.error(error));
	},
	getCountdownTime({ commit }, matchDate) {
		// Set the date we are counting down to
		const date = matchDate.getTime();
		// Get the target element
		const element = document.getElementById('count');
		// function to pad the numbers
		function pad(d) {
		    return (d < 10) ? '0' + d.toString() : d.toString();
		}
		// Update the countdown every 1 second
		const x = setInterval(function () {
			// Get the current date and time
			const now = new Date().getTime();
			// Find the distance between now and the countdown date
			const distance = date - now;
			// Time calculations for days, hours, minutes and seconds
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			let minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			let seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));
			// set the time in the element
			let time = `${days}d ${hours}:${minutes}:${seconds}`;
			// If the countdown is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				time = 'EXPIRED';
			}
			commit('setCountdownTime', time);
		 }, 1000);
	}
}