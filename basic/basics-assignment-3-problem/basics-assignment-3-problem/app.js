const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    watch: {
        number(value) {
            if (value == 37) {
                alert("Not there yet");
            } else if (value > 37) {
                alert("Too much!");
            }

            const that = this;
            setTimeout(function () {
                that.number = 0;
            }, 5000);
        }
    },
    methods: {
        addNum(num) {
            console.log("this.number : " + this.number + " / num : " + num);
            this.number += num;
        },
        reduceNum(num) {
            console.log("this.number : " + this.number + " / num : " + num);
            this.number -= num;
        }
    }
});

app.mount("#assignment");