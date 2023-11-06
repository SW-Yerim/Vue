const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
        // this.counter = 0;
      } else if (value < -50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (this.name === '') this.fullname = '';
    //   else this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(valus) {
    //   if (this.name === '') this.fullname = '';
    //   else this.fullname = value + ' ' + value;
    // }

  },
  computed: {
    fullname() {
      console.log('Running22 again....');
      if (this.name === '' || this.lastName === '') return '';
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log('Running11 again....');
      if (this.name === '') return '';
      return this.name + ' ' + 'Schwarzmüller';
    },
    setName(event, lastName) {
      this.name = event.target.value + '111111 ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');