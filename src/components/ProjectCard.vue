<script>
import { store } from '../store';
export default {
    name: 'ProjectCard',
    props: {
        project: Object,

    },
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">  
    <img :src="project.cover_image != null ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'"
        class="img-fluid" alt="">
    <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <router-link :to="{ name: 'single-project', params: { slug: project.slug }}" class="btn btn-sm btn-primary">
            Dettaglio
        </router-link>
    </div>
</template>
<style lang="scss"></style>