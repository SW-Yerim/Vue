<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <!-- <p>{{ user }}</p>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    let uAge = ref(31);

    let uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function (newValue, oldValue) {
      console.log('Old age: ' + oldValue[0]);
      console.log('New age: ' + newValue[0]);
    });

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    // let uName = ref('Maximilian');
    // let uAge = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    // return { user: user, setAge: setNewAge };

    // function setNewAge() {
    //   uAge.value = 33;
    // }

    return {
      name: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      // lastName,
      // setFirstName,
      lastNameInput,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   },
  // },
  // computed: {
  //
  // },
  // watch: {
  //   age(val) {
  //     console.log(val);
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
