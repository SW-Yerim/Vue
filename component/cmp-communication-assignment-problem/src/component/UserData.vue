<!-- UserData should output two input fields => for name and age -->
<template>
  <form @submit.prevent="submitData">
    <section>
      <div>
        <label>Name : </label>
        <input type="text" placeholder="Your name" v-model="addName" />
      </div>
      <div>
        <label>Age : </label>
        <input type="text" placeholder="Your age" v-model="addAge" />
      </div>
    </section>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      addName: "",
      addAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.addName, this.addAge);
    },
  },
};
</script>
