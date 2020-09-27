<template> 
    <div>
        <div class="q-px-xl q-pt-md text-h3 text-weight-medium">Hi {{UserName}}</div>
        <div class="q-px-xl q-pt-lg text-h5 text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>
        <img src="../assets/Stage1.png" class="plant_img q-pt-s"/>
    </div>
</template>

<script>
  export default {
    props: {
     UserName: String,
   }
 }
</script>

<style scoped>

.plant_img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 50vh;
  width: 90vw;
  border-radius:30px;
}

</style>