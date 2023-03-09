<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        baseUrl: String
    }
}
</script>
<template lang="">  
    <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'"
        class="img-fluid" alt="">
    <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
    </div>
</template>
<style lang="scss"></style>