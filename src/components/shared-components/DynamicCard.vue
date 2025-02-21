<template>
    <div class="dynamic-card">
        <div class="dynamic-card__header">
            <span class="dynamic-card__header-title">
            <slot name="title">
                {{title}}
            </slot>
        </span>
        </div>
        <div class="dynamic-card__body">
            <div class="dynamic-card__body-info" v-if="this.$scopedSlots.info">
                <slot name="info"></slot>
            </div>
            <div class="dynamic-card__body-answer-boxes" v-if="this.$scopedSlots['answer-boxes']">
                <slot name="answer-boxes"></slot>
            </div>
            <div class="dynamic-card__body-checkboxes" v-if="this.$scopedSlots.checkbox">
                <slot name="checkbox"></slot>
            </div>
            <div class="dynamic-card__body-info-icons" v-if="this.$scopedSlots['info-icons']">
                <slot name="info-icons"></slot>
            </div>
        </div>
        <div class="dynamic-card__footer"></div>
        <div class="dynamic-card__footer-button">
            <slot name="buttons-box">
                <CardButton :buttonText="buttonText" @click.native="$emit('card-button-click')"/>
            </slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DynamicCard',
        props: {
            buttonText: {
                required: true,
                type: String,
            }
        },
        components: {
          CardButton: () => import('@/components/shared-components/CardButton')
        },
        computed: {
            title() {
                return this.activeScenario[this.currentStep]?.title;
            },


        },
    }
</script>

<style lang="scss" scoped>
</style>