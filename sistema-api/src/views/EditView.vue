<template>
    <div>
        <TheHeader />

        <div class="container mx-auto p-4">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5">
                        <div class="card-body p-4 p-sm-5">
                            <div class="card-title text-center">
                                <img class="w-25 mx-auto"
                                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/edit-247.png"
                                    alt="edit">
                            </div>
                            <form>
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control" id="floatingTextarea1"
                                        style="height: 100px" v-model="form.title" placeholder="Title"></textarea>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control" id="floatingTextarea2"
                                        style="height: 120px" v-model="form.body" placeholder="Body"></textarea>
                                </div>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <button class="btn btn-success" type="button" v-on:click="editar()">Editar</button>
                                    <button class="btn btn-danger" type="button"
                                        v-on:click="eliminar()">Eliminar</button>
                                    <button class="btn btn-primary" type="button" v-on:click="salir()">Salir</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import axios from 'axios'

export default {
    name: "EditView",
    components: {
        TheHeader,
        TheFooter
    },
    data: function () {
        return {
            postId: null,
            form: {
                id: null,
                title: null,
                body: null,
                userId: null,
            }
        }
    },
    methods: {
        editar() {
            axios.put("https://jsonplaceholder.typicode.com/posts/" + this.postId, this.form)
                .then(data => {
                    console.log(data)
                    this.makeToast("Success", "El Post fue actualizado con éxito", "success")
                })
        },
        salir() {
            this.$router.push("/dashboard")
        },
        eliminar() {
            axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.postId, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(
                this.$router.push("/dashboard")
            )
        },
        makeToast(title, text, variant = null) {
            this.$bvToast.toast(text, {
                title: title,
                variant: variant,
                solid: true,
                autoHideDelay: 5000,
            })
        }
    }
    ,
    mounted: function () {
        this.postId = this.$route.params.id;
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.postId)
            .then(datos => {
                this.form.id = datos.data.id,
                    this.form.title = datos.data.title,
                    this.form.body = datos.data.body,
                    this.form.userId = datos.data.userId
            })
    }
}
</script>