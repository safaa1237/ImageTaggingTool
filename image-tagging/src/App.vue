<template>
  <div id="app"><Tagging></Tagging></div>
</template>

<script>
import Tagging from "./views/Tagging";

export default {
  name: "App",
  components: {
    Tagging,
  },
};
</script>

<style>
body {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
