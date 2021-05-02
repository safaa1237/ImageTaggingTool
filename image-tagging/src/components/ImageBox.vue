<template>
  <div class="container">
    <img class="frame" :src="picture_src" />
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  props: {
    picture_src: String,
  },
  components: {},
};
</script>

<style>
.container {
  height: 320px;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  border-style: solid black 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding-top: 15px;
}
.frame {
  height: 300px;
  width: 90%;
  display: block;
  margin: auto;
}
</style>
