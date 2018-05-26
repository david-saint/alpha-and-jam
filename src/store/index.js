import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { countdown } from './countdown/store'
import { matchStat } from './match_stats/store'
import { groupTable } from './group_table/store'
import { bridalWedding } from './bridal_wedding/store'
import { naijaSupporters } from './naija_supporters/store'

export const store = new Vuex.Store({
	state: {
		token: 'Gfv90zzwtXqD533oy4okBIXIrhMnNwU6Szie0exeR5SfyiJwFehZXZxeIX2O',
		season_id: 7907, // World-cup: 892
		time: 1450000,
    coke_token: '1104208046.a5a7f83.86773a3a3e9a4c119d65e274dacc76e5', // instagram token for naija supporters
    brides_token: '1104208046.a5a7f83.86773a3a3e9a4c119d65e274dacc76e5' // instagram token for bridal
	},
	modules: {
		countdown, groupTable, matchStat, naijaSupporters, bridalWedding
	}
});