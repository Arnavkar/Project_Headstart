<template> 
    <div>
        <div class="q-px-xl q-pt-md text-h3 text-weight-medium">Hi {{UserName}}</div>
        <div class="q-px-xl q-pt-lg text-h5 text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>
        <img src="../assets/forest_plant.png" class="plant_img q-pt-s"/>

        <!-- <img src="../assets/plant-design-laimen-latest-0.svg" class="happy-plant" v-if="Points == 0"> -->

        <img src="../assets/plant-design-laimen-latest-1.svg" class="happy-plant" v-if="Points == 1">

        <img src="../assets/plant-design-laimen-latest-2.svg" class="happy-plant" v-if="Points == 2" style="bottom: 328px; height: 22vh;">
 
        <img src="../assets/plant-design-laimen-latest-3.svg" class="happy-plant" v-if="Points == 3" style="bottom: 365px; height: 26vh;">


    </div>
</template>

<script>
  export default {
    props: {
     UserName: String,
     Points: Number,
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

.happy-plant {
  position: relative;
  bottom: 293px;
  height: 18vh;
  width: 90vw;
  left: 17px;
}

</style>