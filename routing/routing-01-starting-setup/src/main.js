import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamList },  // our-domain.com/teams => TeamsList
        { path: '/users', component: UsersList }
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.use(router);
app.mount('#app');