
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
        getPojects() {
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
        this.getPojects()
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">

            </div>
        </div>
    </div>
</template>
<style scoped></style>