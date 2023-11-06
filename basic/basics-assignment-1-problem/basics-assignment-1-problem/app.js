const app = Vue.createApp({
    data() {
        return {
            name: 'via',
            age: '30',
            number: Math.random(),
            image: 'https://www.google.com/search?q=Vue&newwindow=1&sca_esv=577090324&tbm=isch&source=lnms&sa=X&ved=2ahUKEwizlve24pWCAxU6UfUHHdy0Bi8Q_AUoAXoECAMQAw&biw=958&bih=921&dpr=1#imgrc=cZBjgLjKtgod0M'
        };
    },
    methods: {
        randomText() {
            let num = this.number;

            if (num < 0.33) {
                return this.name;
            } else if (0.33 <= num < 0.66) {
                return this.age;
            } else {
                return num;
            }
        }
    }
});

app.mount('#assignment');