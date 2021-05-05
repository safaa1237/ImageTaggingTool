<template>
  <div>
    <button>
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
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.9rem;
  border-radius: 9px;
  font-size: 0.6rem;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
