<template>
    <DynamicCard v-if="showAdditionalInfo"
                 class="additional-info-card"
                 buttonText="Закрыть"
                 @card-button-click="showAdditionalInfo = !showAdditionalInfo">
        <template #title>
            {{activeScenario[currentStep].substeps[currentIndexSubstep].title}}
        </template>
        <template #info>
            <div class='images-resized' v-html="activeScenario[currentStep].substeps[currentIndexSubstep].text"></div>
        </template>
    </DynamicCard>
    <DynamicCard v-else buttonText="Далее" @card-button-click="processButtonClick">
        <template #info-icons>
            <template v-for="(item, index) in icons">
                <DynamicInfoIcon
                        @click.native="processShowAddInfo(index)"
                        :key="index"
                        :icon="item.icon"
                        :label="activeScenario[currentStep]?.substeps[index]?.title"
                        class="long-labels-handled"
                />
            </template>
        </template>
    </DynamicCard>

</template>

<script>
    import step_mixin from "@/components/Steps/step_mixin";
    import AlertNotification from "@/components/shared-components/AlertNotification";

    export default {
        name: 'SecondScenarioStep',
        mixins: [step_mixin],
        components: {
            AlertNotification,
            DynamicInfoIcon: () => import('@/components/shared-components/DynamicInfoIcon'),
        },
        data() {
            return {
                icons: [
                    {
                        icon: require('@/assets/icons/lab_tests.svg'),
                        checked: false,
                    },
                    {
                        icon: require('@/assets/icons/roentgenography.svg'),
                        checked: false,
                    },
                    {
                        icon: require('@/assets/icons/MRT.svg'),
                        checked: false,
                    },
                    {
                        icon: require('@/assets/icons/other_tests.svg'),
                        checked: false,
                    },
                ],
                currentIndexSubstep: null,
                showAdditionalInfo: false,

            }
        },
        methods: {
            processButtonClick() {
                if (this.shouldDisplayAlert) {
                    this.showAlertNotification({
                        notificationText: 'Не все исследования просмотрены',
                        greenStyle: false,
                        redStyle: true
                    })
                }  else this.proceedToTheNextStep();
            },
            processShowAddInfo(index) {
                this.icons[index].checked = true;
                this.currentIndexSubstep = index;
                this.showAdditionalInfo = !this.showAdditionalInfo;
            },
        },
        computed: {
            shouldDisplayAlert() {
                return this.icons.some(item => !item.checked);
            },
        }
    }
</script>

<style lang="scss">
    .images-resized {
        ::v-deep img {
            width: 65%; /* you can use % */
            height: auto;
            display: block;
            margin: 0 auto;
        }
    }
</style>