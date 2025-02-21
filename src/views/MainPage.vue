<template>
    <div class="home">
        <component :is="activeComponent"/>
        <AlertNotification v-if="getAlertState.show"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'HomePage',
        components: {AlertNotification : () => import('@/components/shared-components/AlertNotification')},
        computed: {
            ...mapGetters('alert', ['getAlertState']),
            activeComponent() {
                return this.activeScenario[this.currentStep]?.component
            },
        },

    }
</script>

<style lang="scss">
    @import "@/scss/pages/main";
</style>
