import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { countdown } from './countdown/store'

export const store = new Vuex.Store({
	state: {
		token: 'Gfv90zzwtXqD533oy4okBIXIrhMnNwU6Szie0exeR5SfyiJwFehZXZxeIX2O'
	},
	modules: {
		countdown
	}
});