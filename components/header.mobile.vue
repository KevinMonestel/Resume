<template>
    <header class="bg-gray-900 block md:hidden px-5 py-2 text-white flex justify-between items-center border-r border-gray-700">
            <span>Kevin Monestel Amador</span>
            <button v-on:click="toggleSidebarAction">
                <font-awesome-icon :icon="['fas', 'bars']"/>
            </button>
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