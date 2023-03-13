<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'HomePage',
                    routeName: 'homepage'
                },
                {
                    label: 'Projects',
                    routeName: 'project_list'
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts'
                }

            ]
        }
    },
}
</script>
<template lang="">
    <nav class="navbar navbar-expand-lg bg-primary" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(item, index) in menuItems" ::key="index">
                    <router-link class="nav-link text-white" :to="{ name: item.routeName }">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="">
    
</style>