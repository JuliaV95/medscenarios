<template>
    <DynamicCard buttonText="Назначить лечение"
                 @card-button-click="processProceedButtonClick">
        <template #checkbox>
            <template>
                <span class="instruction-text">{{instructionText}}</span>
                <div class="answer-wrapper">
                    <div v-for="(item, index) in answers" class="answer-box" :key="index">
                        <input v-model="localCorrectAnswers" :value="index" type="checkbox" :id="index + item.text">
                        <label :for="index + item.text">{{item.text}}</label>
                    </div>
                </div>
            </template>
        </template>
    </DynamicCard>
</template>

<script>
    import step_mixin from "@/components/Steps/step_mixin";

    export default {
        name: 'FifthScenarioStep',
        mixins: [step_mixin],
        components: {
            DynamicCard: () => import('@/components/shared-components/DynamicCard')
        },
        data() {
            return {
                localCorrectAnswers: [],
            }
        },
        computed: {
            answers() {
                return this.activeScenario[this.currentStep]?.labels
            },
            instructionText() {
                return this.activeScenario[this.currentStep]?.instructionText
            },
            isTherapyCorrect() {
                const compare = (a1, a2) => a1.length === a2.length && a1.every(v => a2.includes(v))
                return compare(this.activeScenario[this.currentStep].correctAnswers, this.localCorrectAnswers)
            }
        },
        methods: {
            processProceedButtonClick() {
                if (this.isTherapyCorrect) {
                    this.showAlertNotification({
                        notificationText: 'Лечение верное',
                        greenStyle: true,
                        redStyle: false,
                        timeout: 3000,
                    })
                    this.proceedToTheNextStep()
                } else this.showAlertNotification({
                        notificationText: 'Скорректируйте лечение !',
                        greenStyle: false,
                        redStyle: true
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-btn {
        color: white;
        background-color: #0F3B62;
    }

    .instruction-text {
        display: inline-block;
        margin: 10px 0 15px;
    }

    .answer-wrapper {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;

        .answer-box {
            display: flex;
            gap: 10px;
            text-align: left;
            flex: 1 1 calc(50% - 10px);

        }
    }
</style>