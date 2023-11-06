const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedNmae: ''
    };
  },
  methods: {
    // submitForm(event) {
    //   event.preventDefault();
    //   alert('Submitted!');
    // },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedNmae = this.name;
    },
    add() {
      this.counter++;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = lastName + ' ' + event.target.value;
    }
  }
});

app.mount('#events');