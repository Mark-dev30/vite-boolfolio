<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            post: null
        }
    },
    mounted() {
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            console.log(response.data)
        })
    }
}
</script>
<template lang="">
    <div>
        <h2>SingleProject</h2> 
    </div>
</template>
<style lang="">
    
</style>