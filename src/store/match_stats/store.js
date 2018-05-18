import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const matchStat = {
	state: {
		match: false,
		first_team: {
			id: '',
			logo: '',
			score: '',
			possession: ''
		},
		second_team: {
			id: '',
			logo: '',
			score: '',
			possession: ''
		},
		time: {
			minute: 0,
			second: 0
		},
		goal: {
			count: 0,
			goals: []
		}
	},
	actions,
	getters,
	mutations
}