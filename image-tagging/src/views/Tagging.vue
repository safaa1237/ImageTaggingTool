<template>
  <div>
    <ImageBox
      picture_src="https://upload.wikimedia.org/wikipedia/commons/6/68/St_Kilda_Road_start.jpg"
    />
    <div class="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import ImageBox from "../components/ImageBox";
export default {
  name: "Tagging",
  components: {
    ImageBox,
    Form,
  },
  method: {},
};
</script>

<style scoped>
.form {
  width: 80%;
  height: 100px;
  margin: auto;
  margin-top: 10px;
}
</style>
