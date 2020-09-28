<template> 
    <div>
        <div class="q-px-xl q-pt-md text-h3 text-dark text-weight-medium">Hi {{UserName}}</div>
        <div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>
        <img src="../assets/Stage1.png" class="plant_img q-pt-md"/>
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
  height: auto;
  width: 60vw;
  border-radius:30px;
}

</style>