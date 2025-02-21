export default {
    namespaced: true,
    state: {
        alert_state: {
            show: false,
            notificationText: null,
            greenStyle: false,
            redStyle: false,
        }

    },
    getters: {
        getAlertState(state) {
            return state.alert_state;
        },
    },
    mutations: {
        UPDATE_NOTIFICATION_ALERT_STATE(state, alertState) {
            state.alert_state = {
                show: !state.alert_state.show,
                ...alertState,
            }
            if (alertState.timeout)
                setTimeout(() => state.alert_state.show = false, alertState.timeout);
        },
    },
    actions: {
        updateNotificationAlertState({commit}, payload) {
            commit('UPDATE_NOTIFICATION_ALERT_STATE', payload);
        }
    },
}