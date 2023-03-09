
<script>
import axios from 'axios';

export default {
    name: 'ProjectMain',
    data() {
        return {
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                if (response.data.success) {
                    console.log(response.data)
                    this.projects = response.data.projects
                    this.loading = false;

                }
                else {

                }
            });
        }
    },
    mounted() {
        this.getProjects()
    }
}
</script>
<template>
    <div class="container">
        <div class="row ">
            <div class="col-12 d-flex flex-wrap justify-content-center">
                <div class="card m-2" style="width: 18rem;" v-for="project in projects" :key="project.id">
                    <img :src="project.cover_image != null ? project.cover_image : 'https://picsum.photos/300/200'"
                        class="img-fluid" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>