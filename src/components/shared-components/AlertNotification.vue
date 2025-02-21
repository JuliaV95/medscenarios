<template>
    <div class="blurring-box">
        <div :class="['alert-notification',
                  getAlertState.greenStyle && 'alert-notification--green',
                  getAlertState.redStyle && 'alert-notification--red'
               ]"
             v-click-outside="closeAlert"

        >
            <span>{{getAlertState.notificationText}}</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'AlertNotification',
        methods: {
            closeAlert() {
                this.$store.dispatch('alert/updateNotificationAlertState', {
                    notificationText: null,
                    greenStyle: null,
                    redStyle: null,
                    timeout: null,
                })
            },
        },
        computed: {
            ...mapGetters('alert', ['getAlertState'])
        },
    }
</script>

<style scoped lang="scss">
    .blurring-box {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .alert-notification {
        border: 2px solid black;
        border-radius: 5px;
        width: 200px;
        height: auto;
        padding: 10px;

        &--red {
            background: #F3D7D6;
            color: #DD5453;
            box-shadow: 1px 1px 2px #DD5453, -1px -1px 2px #DD5453;
        }

        &--green {
            background: #E4FED4;
            color: #43612B;
            box-shadow: 1px 1px 2px #43612B, -1px -1px 2px #43612B;
        }
    }
</style>