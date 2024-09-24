<template>
    <div>
        <TheHeader />

        <div class="container mt-4">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="comentario in ListaComentarios" :key="comentario.id" v-on:click="editar(comentario.id)">
                        <th scope="row">{{ comentario.id }}</th>
                        <td>{{ comentario.name }}</td>
                        <td>{{ comentario.email }}</td>
                        <td>{{ comentario.body }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import axios from 'axios';
export default {
    name: "DashboardView",
    data() {
        return {
            ListaComentarios: null,
            pagina: 1
        }
    },
    components: {
        TheHeader,
        TheFooter
    },
    methods: {
        editar(id) {
            console.log(id)
        }
    }
    ,
    mounted: function () {
        let url = "https://jsonplaceholder.typicode.com/comments?postId=" + this.pagina;
        axios.get(url).then(data => {
            this.ListaComentarios = data.data;
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>