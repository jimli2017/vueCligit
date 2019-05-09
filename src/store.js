import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		count:2
  },
	getters: {
			getStateCount:function(state){
				return state.count+1;
			}
    },
  mutations: {
		add(state){
			state.count=state.count+1;
		},
		reduction(state){
			state.count=state.count-1;
		}
  },
  actions: {
		addfun(context){
			context.commit("add");
		},
		reductfun(context){
			context.commit("reduction");
		}
  }
})
