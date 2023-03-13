import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'project_list',
            component: ProjectList
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        }
    ]
});
export { router }