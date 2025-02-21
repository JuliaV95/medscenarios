<template>
    <DynamicCard buttonText="Поставить диагноз"
                 @card-button-click="processProceedButtonClick">
        <template #answer-boxes>
            <template v-for="(answer, index) in answers">
                <div :class="[chosenAnswer === index && 'answer-box--active']"
                     @click="displayAlert(answer.correct, index)"
                     :key="index"
                     class="answer-box"
                >
                    <span>{{answer.text}}</span>
                </div>
            </template>
        </template>
    </DynamicCard>
</template>

<script>
    import step_mixin from "@/components/Steps/step_mixin";

    export default {
        name: 'FourthScenarioStep',
        mixins: [step_mixin],
        components: {},
        data() {
            return {
                answerMatched: false,
                chosenAnswer: null,
            }
        },
        computed: {
            answers() {
                return this.activeScenario[this.currentStep]?.answers
            },
        },
        methods: {
            displayAlert(isCorrect, index) {
                this.chosenAnswer = index;
                if (isCorrect) {
                    this.showAlertNotification({
                        notificationText: 'Диагноз верный',
                        greenStyle: true,
                        redStyle: false,
                        timeout: 3000,
                    });
                    this.answerMatched = true;
                    this.proceedToTheNextStep()
                } else this.showAlertNotification({
                    notificationText: 'Диагноз неверный!',
                    greenStyle: false,
                    redStyle: true
                })
            },
            processProceedButtonClick() {
                this.answerMatched ? this.proceedToTheNextStep() : this.showAlertNotification({
                    notificationText: 'Поставьте верный диагноз!',
                    greenStyle: false,
                    redStyle: true
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-btn {
        color: white;
        background-color: #0F3B62;
    }
</style>