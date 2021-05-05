<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="grid-container">
      <label class="title">Weather Condition:</label>
      <div class="dropdown">
        <select
          name="weatherCondition"
          class="dropbtn"
          v-model="weatherConditionVar"
        >
          <option
            class="dropdown-content"
            v-for="(option, key) in weatherCondition"
            :key="key"
            v-bind:value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <label class="title">Lane Count:</label>
      <div class="dropdown">
        <select name="laneCount" class="dropbtn" v-model="laneCountVar">
          <option
            class="dropdown-content"
            v-for="(option, key) in laneCount"
            :key="key"
            v-bind:value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <label class="title">Environment:</label>
      <div class="dropdown">
        <select name="environment" class="dropbtn" v-model="environmentVar">
          <option
            class="dropdown-content"
            v-for="(option, key) in environment"
            :key="key"
            v-bind:value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <label class="title">Corrupt Image:</label>
      <div class="dropdown">
        <select name="corruptImage" class="dropbtn" v-model="corruptImageVar">
          <option
            class="dropdown-content"
            v-for="(option, key) in corruptImage"
            :key="key"
            v-bind:value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <Button />
  </form>
</template>

<script>
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
      weatherConditionVar: "rainy",
      laneCountVar: "One",
      environmentVar: "tunnel",
      corruptImageVar: "true",
    };
  },
  props: {
    title: String,
  },
  components: { Button },
  methods: {
    submitForm() {
      console.log(this.weatherConditionVar);
      this.weatherConditionVar = "rainy";
    },
  },
};
</script>

<style  >
body {
  font-size: 9px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-left: auto;
  margin-right: auto;
}

.title {
  display: inline-block;
  vertical-align: middle;
}

.dropbtn {
  background-color: blue;
  color: white;
  padding: 2px;
  font-size: 7px;
  border: none;
  cursor: pointer;
  min-width: 80px;
}

.dropdown-content {
  background-color: #f9f9f9;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: black;
}

.dropdown:hover .dropbtn {
  background-color: green;
}
</style>
