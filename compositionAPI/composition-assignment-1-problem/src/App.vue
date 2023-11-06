<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->

  <!-- Task 3: Manage data in three ways -->

  <!-- => Separate refs -->
  <!-- <h3 v-if="goalIsVisible">{{ goal }}</h3>
  <button @click="goalToggleBtn">{{ goal }}</button> -->

  <!-- => Ref Object -->

  <!-- => Reactive Object -->
  <h3 v-if="goal.goalIsVisible">{{ goal.courseGoal }}</h3>
  <button @click="goalToggleBtn">{{ goal.goalBtnText }}</button>

  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';

// export default {
//   setup() {
//     const courseGoal = 'Finish the course !';
//     const goalBtnText = ref('Show Goal !');
//     const goalIsVisible = ref(false);

//     function goalToggleBtn() {
//       goalIsVisible.value = !goalIsVisible.value;
//       if (!goalIsVisible.value) {
//         goalBtnText.value = 'Show Goal !';
//       } else {
//         goalBtnText.value = 'Hidden Goal !';
//       }
//     }

//     return {
//       goal: courseGoal,
//       goalIsVisible,
//       goalBtnText,
//       goalToggleBtn,
//     };
//   },
// };

import { reactive } from 'vue';

export default {
  setup() {
    const goal = reactive({
      courseGoal: 'Finish the course !',
      goalBtnText: 'Show Goal !',
      goalIsVisible: false,
    });

    function goalToggleBtn() {
      goal.goalIsVisible = !goal.goalIsVisible;
      if (!goal.goalIsVisible) {
        goal.goalBtnText = 'Show Goal !';
      } else {
        goal.goalBtnText = 'Hidden Goal !';
      }
    }

    return {
      goal,
      goalToggleBtn,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.show {
  display: block;
}
.hidden {
  display: none;
}
</style>
