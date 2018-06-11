import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const TrafficStat = {
  state: {
    color: '',
    car: '',
    train: '',
    walk: ''
  },
  actions,
  getters,
  mutations
}
