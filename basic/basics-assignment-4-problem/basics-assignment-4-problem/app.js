const app = Vue.createApp({
    data() {
        return {
            user1: false,
            user2: false,
            text: '',
            write: '',
            visible: true,
            background: '#000',
            cgBackground: ''
        };
    },
    computed: {
        addUser1() {
            return user1 = this.user1;
        },
        addUser2() {
            return user2 = this.user2;
        },
        visibleBtn() {
            return visible = this.visible;
        },
        hiddenBtn() {
            return hidden = this.hidden;
        },
        paraClass() {
            return {
                user1: this.write === 'user1',
                user2: this.write === 'user2',
                visible: this.visible,
                hidden: !this.visible
            }
        }
    },
    methods: {
        setText() {
            this.text = this.write;
            if (this.write === 'user1') this.user1 = !this.user1;
            else if (this.write === 'user2') this.user2 = !this.user2;
        },
        setToggle() {
            this.visible = !this.visible;
            this.hidden = !this.hidden;
        },
        setBackground() {
            this.background = this.cgBackground;
        }
    }
});

app.mount("#assignment");