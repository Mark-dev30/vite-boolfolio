
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
                    this.projects = response.data.results
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
        <div class="row">
            <div class="col-12 d-flex flew-wrap">
                <div class="card" style="width: 18rem;" v-for="project in projects" :key="project.id">
                    <img :src="project.cover_image != null ? project.cover_image : 'https://unsplash.com/it/foto/WtolM5hsj14'"
                        class="card-img-top" alt="">
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