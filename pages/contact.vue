<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <p class="subheading pb-5">{{$t('con.info')}}</p>
            <p><font-awesome-icon :icon="['fas', 'envelope']"  class="svg-inline--fa fa-linkedin-in fa-w-14"/> kevinmonestel@outlook.com</p>
            <p><font-awesome-icon :icon="['fas', 'phone']"  class="svg-inline--fa fa-linkedin-in fa-w-14"/>  8867-1061</p>

            <form action="https://formspree.io/f/mrgrgvep" method="POST" @submit.prevent="submitContactFormAction" class="pt-12">
                <div class="pb-5">
                    <h1 class="subheading">{{$t('con.form')}}</h1>
                </div>

                <div v-if="statusMessage" class="mb-5 py-2 text-center w-full bg-red-100 text-red-900 md:w-96">
                    <p>{{statusMessage}}</p>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.name" class="bg-transparent border-b w-full md:w-96 p-2 focus:ring-1 focus:ring-blue-500 focus:border-transparent focus:outline-none" :placeholder="$t('con.nombre')" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.email" class="bg-transparent border-b w-full md:w-96 p-2 focus:ring-1 focus:ring-blue-500 focus:border-transparent focus:outline-none" :placeholder="$t('con.correo')" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.phone" class="bg-transparent border-b w-full md:w-96 p-2 focus:ring-1 focus:ring-blue-500 focus:border-transparent focus:outline-none" :placeholder="$t('con.numero')" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.subject" class="bg-transparent border-b w-full md:w-96 p-2 focus:ring-1 focus:ring-blue-500 focus:border-transparent focus:outline-none" :placeholder="$t('con.asunto')" required/>
                </div>

                <div class="pb-5">
                    <textarea type="textarea" v-model="contactModel.content" class="bg-transparent border-b w-full md:w-2/5 p-2 focus:ring-1 focus:ring-blue-500 focus:border-transparent focus:outline-none" :placeholder="$t('con.cuerpo')" required/>
                </div>

                <div class="pb-5">
                    <button type="submit" class="bg-gray-700 text-white shadow py-3 hover:bg-blue-500 transition w-full md:w-2/5">{{buttonText}}</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    import Contact from '../models/contact/contact';
    import Snackbar from 'node-snackbar';

    export default {
        name: 'contact',

        head:{
            title: 'Contact - KMA'
        },

        data(){
            return{
                contactModel: new Contact('', '', '', '', ''),
                statusMessage: null,
                buttonText: this.$t('con.enviar')
            }
        },

        methods: {
            async submitContactFormAction(){
                try{
                    this.buttonText = this.$t('con.enviando');
                    var response = await this.$axios.post('https://formspree.io/f/mrgrgvep', { data: this.contactModel });

                    if(response.status === 200){
                        this.contactModel = new Contact('', '', '', '', '');
                        this.buttonText = this.$t('con.enviar');

                        Snackbar.show({
                            text: this.$t('con.exitoso'),
                            pos: 'bottom-center',
                            actionText: this.$t('cerrar')
                        })
                    }

                }catch(err){
                    this.statusMessage = err
                    this.buttonText = this.$t('con.enviar');
                }
            }
        }
    }
</script>

<style scoped>

</style>