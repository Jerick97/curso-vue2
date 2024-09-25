<template>
    <div>
        <TheHeader />

        <div class="container p-4">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in listaPosts" :key="post.id" v-on:click="editar(post.id)">
                        <th scope="row">{{ post.id }}</th>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
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
            listaPosts: null,
            pagina: 1
        }
    },
    components: {
        TheHeader,
        TheFooter
    },
    methods: {
        editar(id) {
            this.$router.push(`/edit/${id}`)
        }
    }
    ,
    mounted: function () {
        let url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url).then(response => {
            this.listaPosts = response.data.filter(post => post.userId === this.pagina);
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });
    }
}
</script>

<style lang="stylus" scoped>

</style>