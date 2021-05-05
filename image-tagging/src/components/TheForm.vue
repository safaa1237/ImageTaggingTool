<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <div class="form-control">
        <label>Weather Condition:</label>
        <div
          class="radio"
          v-for="(option, key) in weatherCondition"
          :key="key"
          v-bind:value="option"
        >
          <input
            type="checkbox"
            v-model="weatherConditionVar"
            v-bind:name="option"
            :value="option"
          />
          {{ option }}
        </div>
      </div>
      <label>Lane Count:</label>
      <!-- not setting the lane counts means its unclear -->
      <input
        class="lane-count"
        v-bind:name="laneCountVar"
        type="number"
        v-model="laneCountVar"
        v-bind:max="laneCount.length - 1"
      />
    </div>
    <div class="form-control">
      <label>Environment</label>
      <select v-bind:name="environmentVar" v-model="environmentVar">
        <option
          v-for="(option, key) in environment"
          :key="key"
          v-bind:value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div class="form-control">
      <label>Corrupt Image:</label>
      <div
        class="radio"
        v-for="(option, key) in corruptImage"
        :key="key"
        v-bind:value="option"
      >
        <input
          type="radio"
          v-model="corruptImageVar"
          name="weather"
          :value="option"
        />
        {{ option }}
      </div>
    </div>

    <div>
      <Button text="update"></Button>
    </div>
  </form>
</template>

<script>
//the hard coded tags here could be taken from a web servie.
const weatherCondition = [
  "rainy",
  "sunny",
  "cloudy",
  "foggy",
  "snow",
  "unclear",
];
const laneCount = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "unclear",
];
const environment = [
  "tunnel",
  "highway",
  "inner city",
  "outer city",
  "unclear",
];
const corruptImage = ["true", "false"];

import Button from "./Button";
export default {
  name: "Dropdown",
  data() {
    return {
      weatherCondition: weatherCondition,
      laneCount: laneCount,
      environment: environment,
      corruptImage: corruptImage,
      weatherConditionVar: [],
      laneCountVar: null,
      environmentVar: null,
      corruptImageVar: null,
    };
  },
  components: { Button },
  methods: {
    submitForm() {
      this.$store.commit("reset");
      console.log(this.$store.state.tags);
      this.$store.state.tags = [...this.weatherConditionVar];
      if (this.laneCountVar != null) {
        this.$store.state.tags.push("lanes: " + this.laneCountVar);
      }
      if (this.environmentVar != null) {
        this.$store.state.tags.push(this.environmentVar);
      }
      if (this.corruptImageVar) {
        console.log(this.corruptImageVar);
        this.$store.state.tags.push("corrupted");
      }
      this.laneCountVar = null;
      this.environmentvar = null;
      this.corruptImageVar = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  margin-right: -10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.09rem;
  padding-left: 1rem;
  background-color: #ffffff;
  height: 380px;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  font-size: 0.7rem;
}

input,
select {
  font-size: 0.5rem;
  display: block;
  width: 100%;
  font: inherit;
}

select {
  width: auto;
  font-size: 0.5rem;
}
option {
  font-size: 0.5rem;
}
input[type="checkbox"],
input[type="radio"] {
  font-size: 0.3rem;
  width: auto;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}
.lane-count {
  width: 90%;
  font-size: 0.5rem;
}
.radio,
.checkbox {
  font-size: 0.5rem;
  display: flex;
  align-items: center;
}
</style>