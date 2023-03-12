<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: []
        }
    },
    mounted() {
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            this.project = response.data.project
        })
    }
}
</script>
<template lang="">
    <div class="d-flex justify-content-center">
        <div class="card mt-5" style="width: 90%;">
            <img :src="`${this.store.baseUrl}/storage/${project.cover_image}`" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">Title: {{project.title}}</h5>
                <p class="card-text"><strong>Description: </strong>{{project.description}}</p>
                <em v-if="project.type != null" class="d-block">
                    {{project.type.name}}
                </em>
                <em v-else class="d-block">
                    No types 
                </em>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>