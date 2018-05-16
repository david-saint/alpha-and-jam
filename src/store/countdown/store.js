import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const countdown = {
	state: {
		time: '',
		stadium: '',
		matchday: '',
		date_time: {
			date: '',
			time: ''
		},
		localTeam: {
			name: '',
			shortName: '',
			flag: ''
		},
		visitorTeam: {
			name: '',
			shortName: '',
			flag: ''
		}
	},
	actions,
	getters,
	mutations
}