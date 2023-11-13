<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enterdName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enterdPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enterdEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enterdName: "",
      enterdPhone: "",
      enterdEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enterdName,
        this.enterdPhone,
        this.enterdEmail
      );
    },
  },
};
</script>
