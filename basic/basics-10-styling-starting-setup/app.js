const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        boxAClasses() {
            return {
                active: this.boxASelected,
                red: this.boxASelected,
            };
        },
        boxBClasses() {
            return {
                active: this.boxBSelected,
                blue: this.boxBSelected,
            };
        },
        boxCClasses() {
            return {
                active: this.boxCSelected,
                green: this.boxCSelected,
            };
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        },
        boxReset() {
            this.boxASelected = false;
            this.boxBSelected = false;
            this.boxCSelected = false;
        }
    }
});


app.mount("#styling");