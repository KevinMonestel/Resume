<template>
    <header class="bg-yellow-600 block md:hidden px-5 py-2 text-white flex justify-between items-center">
            <span>Kevin Monestel Amador</span>
            <button v-on:click="toggleSidebarAction"><span class="text-2xl">🍔</span></button>
    </header>
</template>

<script>
    export default {
        watch: {
            '$route' (){
                let sidebarElement = document.querySelector('#sidebar');
                sidebarElement.classList.add('hidden')
            }
        },
        methods:{
            toggleSidebarAction(){
                let sidebarElement = document.querySelector('#sidebar');
                sidebarElement.classList.toggle('hidden')
            }
        }
    }
</script>

<style scoped>

</style>