<template> 
    <div>
        <div class="q-px-xl q-pt-md text-h3 text-dark text-weight-medium">Hi {{this.userInfo.Name}}</div>
        <div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Exclusive Member Since {{this.userInfo.signUpDate}} </div>
        <div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>
        <img src="../assets/Stage1.png" class="plant_img q-pt-md"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters("info",{ userInfo: "info" }),
  },
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