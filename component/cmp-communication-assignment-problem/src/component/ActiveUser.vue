<!-- ActiveUser should output a username (h2) and age (h3) -->
<template>
  <li>
    <h2>Name : {{ username }}</h2>
    <h3>Age : {{ userage }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: String,
      required: true,
    },
  },
  //   data() {
  //     return {

  //     };
  //   },
  methods: {},
};
</script>
