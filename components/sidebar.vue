<template>
    <aside class="hidden w-screen h-screen min-h-screen max-h-screen fixed z-50 overflow-auto bg-gray-900 text-white md:block md:w-64 md:bg-opacity-100 md:border-r md:border-gray-700" id="sidebar">
        <div class="text-right fixed -right-0 md:hidden p-5">
            <button v-on:click="hideSidebarElementAction"><span class="text-2xl"><font-awesome-icon :icon="['fa', 'times-circle']"/></span></button>
        </div>
        <nav class="flex flex-col h-full justify-center items-center">
            <div class="mb-5">
                <img class="rounded-full w-44 shadow ring-4 ring-blue-400" src="~/assets/img/foto.jpg" alt="Foto personal">
            </div>
            <ul class="text-center text-xl">
                <li class="mb-1 cursor-pointer rounded hover:bg-gray-700">
                    <nuxt-link :to="localePath('/')" class="block p-2">{{$t('sidebar.index')}}</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-gray-700">
                    <nuxt-link :to="localePath('/experience')" class="block p-2">{{$t('sidebar.exp')}}</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-gray-700">
                    <nuxt-link :to="localePath('/education')" class="block p-2">{{$t('sidebar.edu')}}</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-gray-700">
                    <nuxt-link :to="localePath('/skills')" class="block p-2">{{$t('sidebar.hab')}}</nuxt-link>
                </li>
                <li class="mb-1 cursor-pointer rounded hover:bg-gray-700">
                    <nuxt-link :to="localePath('/contact')" class="block p-2">{{$t('sidebar.con')}}</nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "Sidebar",

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