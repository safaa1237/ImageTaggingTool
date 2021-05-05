<template>
  <div>
    <button
      v-on:mouseover="hover = true"
      v-on:mouseleave="hover = false"
      :class="{ inactiveBtn: !hover, activeBtn: hover }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped  >
.inactiveBtn {
  font-size: 16px;
  text-align: center;
  display: inline-block;
  color: white;
  background-color: blue;
  border: 1px solid white;
  border-radius: 4px;
  width: 40px;
  height: 20px;
}
.activeBtn {
  font-size: 16px;
  text-align: center;
  display: inline-block;
  color: blue;
  border-radius: 4px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid aqua;
}
</style>
