<template>
  <div><img class="frame" :src="picture_src" /></div>
</template>

<script>
export default {
  name: "ImageBox",
  props: {
    picture_src: String,
  },
  components: {},
  methods: {},
};
</script>

<style>
.frame {
  height: 220px;
  width: 60%;
  display: block;
  margin: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
