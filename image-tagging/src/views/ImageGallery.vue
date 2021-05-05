<template>
  <div>
    <div class="image" v-on:click="openTaggingPage()">
      <a target="_blank" href="img_5terre.jpg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/St_Kilda_Road_start.jpg"
          alt="Cinque Terre"
          width="600"
          height="400"
        />
      </a>
      <div class="desc">{{ $store.state.tags }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  components: {},
  method: {
    openTaggingPage() {
      // this.$router.push({
      //   name: "tagging",
      //   //query: { final_result: this.result },
      // });
    },
  },
};
</script>

<style scoped>
div.image {
  font-size: 7px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 2px;
  float: left;
  width: 180px;
}

div.image:hover {
  border: 1px solid #777;
}

div.image img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 10px;
  text-align: center;
}
</style>
