import Vue from 'vue'
import Vuex from 'vuex'
import constants from "@/components/constants/constants";
import alert_notification_module from "@/store/modules/alert_notification_module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      alert: alert_notification_module,
  },
  state: {
    currentStep: 0,
    activeScenario: null,
  },
  getters: {
    getCurrentStep(state) {
      return state.currentStep;
    },
    getActiveScenario(state) {
      return state.activeScenario;
    }
  },
  mutations: {
    RESET_CURRENT_STEP(state) {
      state.currentStep = 0;
    },
    MOVE_CURRENT_STEP(state) {
      state.currentStep = ++state.currentStep;
    },
    SET_ACTIVE_SCENARIO(state, scenario) {
      state.activeScenario = constants.scenarios[scenario];
    }
  },
  actions: {
    resetCurrentStep({commit}) {
      commit('RESET_CURRENT_STEP')
    },
    moveCurrentStep({commit}) {
      commit('MOVE_CURRENT_STEP')
    },
    setActiveScenario({commit}, payload) {
      commit('SET_ACTIVE_SCENARIO', payload)
    }
  },
})
