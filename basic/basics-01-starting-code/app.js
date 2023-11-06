const app = Vue.createApp({
    data() { // data: function() {}
        return {
            courseGoal: 'learn Vue !',
            courseGoalA: 'Finish the course and learn Vue !',
            courseGoalB: '<h2>Master Vue and build amazing apps !</h2>',
            homework: {
                title: 'Vue',
                contents: 'Test Vue'
            },
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');