const app = Vue.createApp({
    data() {
        return {
            name: 'YR',
            age: '30',
            keydownText: 'OUTPUT',
            keyupText: 'OUTPUT',
            text: '111'
        };
    },
    methods: {
        submitButton() {
            alert("name : " + this.name + " / age : " + this.age);
        },
        keydownPrint() {
            this.text = "name : " + this.name + " / age : " + this.age;
        },
        keyupPrint() {
            this.keyupText = this.text;
        },
        setText(text, event) {
            this.text = text + event.target.value;
        }
    }
});

app.mount("#assignment");