export default {
	setCountdownState(state, object) {
		state.matchday = object.matchday;
		state.date_time.date = object.date_time.date;
		state.date_time.time = object.date_time.time;
		state.localTeam.name = object.localTeam.name;
		state.localTeam.shortName = object.localTeam.shortName;
		state.localTeam.flag = object.localTeam.flag;
		state.visitorTeam.name = object.visitorTeam.name;
		state.visitorTeam.shortName = object.visitorTeam.shortName;
		state.visitorTeam.flag = object.visitorTeam.flag;
	},
	setCountdownTime(state, time) {
		state.time = time
	}
}