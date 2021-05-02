<template>
  <div class="dropdown">
    <button class="dropbtn">{{ title }}</button>
    <div class="dropdown-content">
      <a v-for="(option, key) in options" :key="key" href="#">{{ option }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    title: String,
    options,
  },
  components: {},
};
</script>

<style lang="scss" scoped >
@import "../style.scss";

.dropbtn {
  background-color: $main_color;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  min-width: 160px;
}

.dropdown {
  position: relative;
  display: inline-block;
  min-width: 160px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: $light_blue;
}
</style>
