
<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
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
                    <ProjectCard :project="project" :baseUrl="baseUrl" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>