import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', component: TeamList },
        { path: '/', redirect: '/teams' },

        { 
            name: 'teams',
            path: '/teams', 
            components: { default: TeamList, footer111: TeamsFooter }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ] 
        },  // our-domain.com/teams => TeamsList
        // { path: '/teams', component: TeamList, alias: '/' },  // our-domain.com/teams => TeamsList

        { 
            path: '/users', 
            components: { 
                default: UsersList, 
                footer111: UsersFooter 
            }, 
            beforeEnter(to, from, next) {
                console.log('users beforEnter');
                console.log(to,from);
            
                next();
            } 
        },

        // { path: '/:notFound(.*)', redirect: '/teams' },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }

});

router.beforeEach(function(to, from, next) {
    console.log('Global beforEach');
    console.log(to, from);

    next();

    // if (to.name === 'team-members') {
    //     next();
    //     // next(false);
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } });
    // }
});

router.afterEach((to, from) => {
    console.log('Global afterEach');
    console.log(to, from);
})

const app = createApp(App)

app.use(router);
app.mount('#app');
