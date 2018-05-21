import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { countdown } from './countdown/store'
import { matchStat } from './match_stats/store'
import { groupTable } from './group_table/store'
// import { naijaSupporters } from './naija_supporters/store'

export const store = new Vuex.Store({
	state: {
		token: 'Gfv90zzwtXqD533oy4okBIXIrhMnNwU6Szie0exeR5SfyiJwFehZXZxeIX2O',
		season_id: 892, // 12767
		time: 120000
	},
	modules: {
		countdown, groupTable, matchStat
	}
});