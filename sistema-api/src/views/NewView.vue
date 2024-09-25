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
                                    <input type="text" class="form-control" id="floatingInput1" v-model="form.title"
                                        placeholder="title">
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput2" v-model="form.body"
                                        placeholder="body">
                                </div>
                                <div class="d-flex gap-2 w-100 justify-content-between">
                                    <button class="btn btn-success" type="button"
                                        v-on:click="guardar()">Guardar</button>
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
import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"
import axios from "axios";
export default {
    name: "NewView",
    components: {
        TheHeader,
        TheFooter
    },
    data: function () {
        return {
            form: {
                title: null,
                body: null,
                userId: 1,
            }
        }
    },
    methods: {
        guardar() {
            axios.post("https://jsonplaceholder.typicode.com/posts", this.form)
                .then(data => {
                    console.log(data)
                    this.makeToast("Success", "El Post fue creado con éxito", "success")
                    this.$router.push("/dashboard")
                }).cath(e => {
                    console.log(e)
                    this.makeToast("Error", "Error al guardar", "error")
                })
        },
        salir() {
            this.$router.push("/dashboard")
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
}
</script>

<style>
.toast:not(.show) {
    display: block;
}
</style>