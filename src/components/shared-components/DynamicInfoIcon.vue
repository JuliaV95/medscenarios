<template>
    <div class="icon-box">
        <div class="icon-box-img-wrapper"><img :src="icon"/></div>
        <span>{{label}}</span>
    </div>
</template>

<script>
    export default {
        name: 'DynamicInfoIcon',
        props: {
            icon: {
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
        }

    }
</script>

<style scoped lang="scss">
    .icon-box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0 5px 0;
        border-radius: 5px;
        border: 1px solid black;
        font-weight: 600;
        color: #000;
        box-shadow: 1px 1px 2px #325472, -1px -1px 2px #325472;

        &-img-wrapper {
            width: 75px;
            height: 75px;
            margin-bottom: 10px;
            img {
                width: 100%;
                height: auto;
                margin-bottom: 20px;
            }
        }
    }
</style>