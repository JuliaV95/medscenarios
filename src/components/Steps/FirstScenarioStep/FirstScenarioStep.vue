<template>
    <DynamicCard @card-button-click="proceedToTheNextStep" buttonText="Начать">
        <template #info>
            <span v-html="informationText"></span>
        </template>
    </DynamicCard>
</template>

<script>
    import step_mixin from "@/components/Steps/step_mixin";

    export default {
        name: 'FirstScenarioStep',
        mixins: [step_mixin],
        computed: {
            informationText() {
                return this.activeScenario[this.currentStep]?.informationText;
            }
        }
    }
</script>

<style>

</style>