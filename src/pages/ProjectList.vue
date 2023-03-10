
<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    name: 'ProjectList',
    data() {
        return {
            store,
            projects: [],
            loading: true

        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                if (response.data.success) {
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
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>