export default {
    components: {
        DynamicCard: () => import('@/components/shared-components/DynamicCard'),
        CardButton: () => import('@/components/shared-components/CardButton'),
    },
    methods: {
        proceedToTheNextStep() {
            this.$store.dispatch('moveCurrentStep');
        },
        showAlertNotification({notificationText, greenStyle, redStyle, timeout}) {
            setTimeout(() => {
                this.$store.dispatch('alert/updateNotificationAlertState', {
                    notificationText,
                    greenStyle,
                    redStyle,
                    timeout
                })
            })

        }
    }
}