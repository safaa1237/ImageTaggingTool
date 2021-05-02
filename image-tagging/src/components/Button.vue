<template>
  <div>
    <button
      v-on:mouseover="hover = true"
      v-on:mouseleave="hover = false"
      :class="[
        small
          ? { inactiveSmallBtn: !hover, activeSmallBtn: hover }
          : { inactiveBtn: !hover, activeBtn: hover },
      ]"
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

<style lang="scss" scoped  >
@import "../style.scss";

.inactiveBtn {
  font-size: 16px;
  text-align: center;
  display: inline-block;
  margin-top: 40px;
  color: white;
  background-color: $main_color;
  border-radius: 10px;
  width: 200px;
  height: 60px;
}
.activeBtn {
  font-size: 16px;
  text-align: center;
  display: inline-block;
  margin-top: 40px;
  color: $main_color;
  border-radius: 10px;
  width: 200px;
  height: 60px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid $main_color;
}
.inactiveSmallBtn {
  font-size: 14px;
  text-align: center;
  display: inline-block;
  color: white;
  background-color: $main_color;
  border-radius: 5px;
  margin-top: -5px;
  width: 150px;
  height: 40px;
}
.activeSmallBtn {
  font-size: 14px;
  text-align: center;
  display: inline-block;
  color: $main_color;
  border-radius: 5px;
  margin-top: -5px;
  width: 150px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid $main_color;
}
</style>
