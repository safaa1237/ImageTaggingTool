<template>
  <div class="container">
    <div class="image">
      <ImageBox
        picture_src="https://upload.wikimedia.org/wikipedia/commons/6/68/St_Kilda_Road_start.jpg"
      />
      <Tags />
    </div>
    <div class="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../components/TheForm.vue";
import ImageBox from "../components/ImageBox";
import Tags from "../components/Tags.vue";
export default {
  name: "Tagging",
  components: {
    Tags,
    ImageBox,
    Form,
  },
};
</script>

<style scoped>
.form {
  width: 50%;
  height: 100px;
  margin: auto;
  margin-top: -30px;
}
.image {
  top: 100px;
  width: 100%;
  height: 100px;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
