<template>
    <main class="flex-grow md:ml-64">
        <div class="text-right p-5 md:fixed md:top-0 md:right-0">
            <font-awesome-icon :icon="['fas', 'language']"  class="text-gray-600"/>
            <nuxt-link :to="switchLocalePath('es')" class="text-gray-400">Español</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')" class="text-gray-400">English</nuxt-link>
        </div>
        <Nuxt />
    </main>
</template>

<script>
    export default {
        name: 'Main'
    };
</script>

<style scoped>

</style>