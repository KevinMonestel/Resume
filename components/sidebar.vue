<template>
    <aside class="hidden w-screen h-screen min-h-screen max-h-screen fixed z-50 overflow-auto bg-opacity-75 bg-yellow-600 text-white md:block md:w-64 md:bg-opacity-100" id="sidebar">
        <div class="text-right fixed -right-0 md:hidden p-5">
            <button v-on:click="hideSidebarElementAction"><span class="text-2xl">❌</span></button>
        </div>
        <nav class="flex flex-col h-full justify-center items-center">
            <div class="mb-5">
                <img class="rounded-full w-44" :src="imgUrl" alt="Foto personal">
            </div>
            <ul class="text-center text-xl">
                <li class="mb-1 cursor-pointer rounded hover:bg-yellow-500">
                    <nuxt-link to="/" class="block p-2">Acerca</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-yellow-500">
                    <nuxt-link to="/experience" class="block p-2">Experiencia</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-yellow-500">
                    <nuxt-link to="/education" class="block p-2">Educación</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-yellow-500">
                    <nuxt-link to="/skills" class="block p-2">Habilidades</nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return{
            imgUrl: 'https://instagram.fsjo6-1.fna.fbcdn.net/v/t51.2885-15/e35/158917271_815302629055851_741681807227203621_n.jpg?tp=1&_nc_ht=instagram.fsjo6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=bDFslRBtRiUAX9o-mQT&oh=ab0843fe05ffe048d253d013ad994522&oe=6075E67D'
        }
    },
    methods: {
        hideSidebarElementAction(){
            let sidebarElement = document.querySelector('#sidebar');
            sidebarElement.classList.add('hidden')
        }
    }
};
</script>

<style>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>