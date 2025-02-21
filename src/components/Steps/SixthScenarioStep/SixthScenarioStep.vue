<template>
    <DynamicCard
            v-if="showAnalysis"
            class="additional-info-card"
            buttonText="Закрыть"
            @card-button-click="showAnalysis = !showAnalysis"
    >
        <template #title>
            {{activeScenario[currentStep].analysisText.title}}
        </template>
        <template #info>
            <div v-html="activeScenario[currentStep].analysisText.text"></div>
        </template>
    </DynamicCard>
    <DynamicCard v-else
                 @card-button-click="resetTest"
                 buttonText="Проиграть еще раз">
        <template #info>
            <p v-html="informationText"></p>
            <CardButton buttonText="Анализ клинического случая"
                        @click.native="showAnalysis = !showAnalysis"
                        :style="{'margin-top': '20px'}"
            />
            <div class="rating-box">
                <span>Оцените сложность: </span>
                <div class="icon-clickable">
                    <StarIcon size="30" v-for="i in 5"
                              :class="i <= rated && 'star-icon-highlighted'"
                              @click="rated = i"
                    />
                </div>
            </div>

        </template>
    </DynamicCard>
</template>

<script>
    import step_mixin from "@/components/Steps/step_mixin";

    export default {
        name: 'SixthScenarioStep',
        mixins: [step_mixin],
        data() {
            return {
                showAnalysis: false,
                rated: null,
            }
        },
        components: {
            CardButton: () => import('@/components/shared-components/CardButton'),
            StarIcon: () => import('vue-feather-icons/icons/StarIcon')
        },
        computed: {
            informationText() {
                return this.activeScenario[this.currentStep]?.informationText;
            },
        },
        methods: {
            resetTest() {
                this.$store.dispatch('resetCurrentStep')
            }
        }
    }
</script>

<style lang="scss">
    .star-icon-highlighted {
        fill: #FFC000;
    }

    .rating-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>