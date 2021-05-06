<template>
  <div div="container">
    <div
      class="tag-container"
      v-for="(option, key) in tags"
      :key="key"
      :value="option"
    >
      <div class="tag">
        <img class="tag-icon" src=../assets/tag.svg />
        <p class="label">{{ option }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  method() {},
  computed: {
    tags() {
      return this.$store.state.tags;
    },
  },
};
</script>

<style scoped  >
.container {
  display: flex;
}
.tag i {
  position: absolute;
}

.tag {
  margin: 1rem;
  width: 70px;
  height: 20px;
  border: 1px dashed gray;
  border-radius: 3px;
  display: flex;
}

.label {
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: gray;
}
.tag-icon {
  width: 10px;
  padding: 5px;
}
.tag-container {
  display: inline-block;
}
</style>
