<template>
    <button class="card-btn">{{buttonText}}</button>
</template>

<script>
    export default {
        name: 'CardButton',
        props: {
          buttonText: {
              require: true,
              value: String,
          }
        },
    }
</script>

<style scoped>

</style>