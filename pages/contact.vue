<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <p class="subheading pb-5">Información de contacto</p>
            <p><font-awesome-icon :icon="['fas', 'envelope']"  class="svg-inline--fa fa-linkedin-in fa-w-14"/> kevinmonestel@outlook.com</p>
            <p><font-awesome-icon :icon="['fas', 'phone']"  class="svg-inline--fa fa-linkedin-in fa-w-14"/>  8867-1061</p>

            <form action="https://formspree.io/f/mrgrgvep" method="POST" @submit.prevent="submitContactFormAction" class="pt-12">
                <div class="pb-5">
                    <h1 class="subheading">Formulario de contacto</h1>
                </div>

                <div v-if="statusMessage" class="mb-5 py-2 text-center w-full bg-red-100 text-red-900 md:w-96">
                    <p>{{statusMessage}}</p>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.name" class="w-full md:w-96 p-2 border focus:ring-1 focus:ring-yellow-500 focus:border-transparent focus:outline-none" placeholder="Nombre completo" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.email" class="w-full md:w-96 p-2 border focus:ring-1 focus:ring-yellow-500 focus:border-transparent focus:outline-none" placeholder="Correo electrónico" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.phone" class="w-full md:w-96 p-2 border focus:ring-1 focus:ring-yellow-500 focus:border-transparent focus:outline-none" placeholder="Número de teléfono" required/>
                </div>

                <div class="pb-5">
                    <input type="text" v-model="contactModel.subject" class="w-full md:w-96 p-2 border focus:ring-1 focus:ring-yellow-500 focus:border-transparent focus:outline-none" placeholder="Asunto" required/>
                </div>

                <div class="pb-5">
                    <textarea type="textarea" v-model="contactModel.content" class="w-full md:w-2/5 p-2 border focus:ring-1 focus:ring-yellow-500 focus:border-transparent focus:outline-none" placeholder="Cuerpo del mensaje" required/>
                </div>

                <div class="pb-5">
                    <button type="submit" class="bg-gray-700 text-white shadow py-3 hover:bg-yellow-500 transition w-full md:w-2/5">{{buttonText}}</button>
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
                buttonText: 'Enviar'
            }
        },

        methods: {
            async submitContactFormAction(){
                try{
                    this.buttonText = 'Enviando formualario...'
                    var response = await this.$axios.post('https://formspree.io/f/mrgrgvep', { data: this.contactModel });

                    if(response.status === 200){
                        this.contactModel = new Contact('', '', '', '', '');
                        this.buttonText = 'Enviar';

                        Snackbar.show({
                            text: '¡Formulario enviado satisfactoriamente!',
                            pos: 'bottom-center',
                            actionText: 'Cerrar'
                        })
                    }

                }catch(err){
                    this.statusMessage = err
                    this.buttonText = 'Enviar';
                }
            }
        }
    }
</script>

<style scoped>

</style>