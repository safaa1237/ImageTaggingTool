<template>
  <div>
    <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/St_Kilda_Road_start.jpg"
          alt="Cinque Terre"
          width="600"
          height="400"
        />
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  components: {},
  method: {},
};
</script>

<style scoped>
div.gallery {
  font-size: 7px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 2px;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 10px;
  text-align: center;
}
</style>
