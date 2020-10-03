<template> 
    <div>
        <div class="q-px-xl q-pt-md text-h3 text-dark text-weight-medium">Hi {{this.name}}</div>
        <div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Exclusive Member Since {{this.signUpDate}} </div>
        <div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>

        <div class="image-container" style=" height: 410px;">
          

        

        <img src="../assets/Stage1.png" class="plant_img q-pt-md" v-if="points == 1"/>

        <img src="../assets/Stage2.png" class="plant_img q-pt-md" v-if="points == 2" style="top: 118px;"/>

        <img src="../assets/Stage3.png" class="plant_img q-pt-md" v-if="points == 3" style="top: 37px; "/>

        </div>

        <select id="points-quantity" v-model.number="points">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>

        

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters("info",{ userInfo: "info" }),
  },
  data(){
    return{
      name: JSON.parse(localStorage.getItem("userInfo")).Name,
      email: JSON.parse(localStorage.getItem("userInfo")).Email,
      signUpDate: JSON.parse(localStorage.getItem("userInfo")).signUpDate,
      points : 1
    }
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
  position: relative;
  top: 170px;
}

#points-quantity {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>