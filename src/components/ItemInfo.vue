<template>
  <q-page padding class = "container q-pa-md q-gutter-sm">
    <q-dialog 
    v-model = "card">
      <q-card class = "container q-pa-md">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <div class="field-data q-pa-sm" >
          <q-img 
          id="itemimg"
          contain
          class = "q-mr-md"
          :src="item.image"/>
          <h4> {{item.name}} </h4>
          <!-- <button class = "item"> Back </button> -->
        </div>

        <p v-if="item.rating>0" class="text-h6 q-pt-md"> 
          <q-icon 
          name="eco" 
          clickable
          class ="icon"/>
          Place of manufacture
        </p>
        <div v-if="item.rating>0" style = "display:flex; flex-wrap:wrap;">
          <q-btn :style = "[ item.m1 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Local"  no-caps />
          <q-btn :style = "[ item.m2 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="From Asia"  no-caps />
          <q-btn :style = "[ item.m3 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Outside of Asia"  no-caps />
        </div>
        

        <p v-if="item.rating>0" class="text-h6 q-pt-md"> 
          <q-icon 
          name="eco" 
          clickable
          class ="icon"/>
          Packaging
        </p>
        <div v-if="item.rating>0" style = "display:flex; flex-wrap:wrap;">
          <q-btn :style = "[ item.p1 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Sustainably Sourced"  no-caps />
          <q-btn :style = "[ item.p2 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Bio-degradable"  no-caps />
          <q-btn :style = "[ item.p3 == 1 ? {'background-color':'#41B883'} : {'color':'black'}]" class = "button q-ma-xs" label="Recyclable"  no-caps />
        </div>

        <p v-if="item.rating>0" class="text-h6 q-pt-md"> 
          <q-icon 
          name="eco" 
          clickable
          class ="icon"/>
          Ingredients
        </p>

        <div v-if="item.rating>0" style = "display:flex; flex-wrap:wrap;">
          <q-btn :style = "[ item.m1 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Organic"  no-caps />
          <q-btn :style = "[ item.m2 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Plant-based Alternative"  no-caps />
          <q-btn :style = "[ item.m3 == 1 ? {'background-color':'#41B883'} : {'color':'black'}]" class = "button q-ma-xs" label="Cruelty-free"  no-caps />
          <q-btn :style = "[ item.m4 == 1 ? {'background-color':'#41B883'} : {'color':'black'} ]" class = "button q-ma-xs" label="Carbon-certification"  no-caps />
        </div>

        <span class="text-h5 q-pt-md"> Our Rating: </span>
        <q-rating
        :value="item.rating"
        max="5"
        size="3em"
        icon="eco"
        :color-selected="ratingColors"
        color="grey"
        readonly/>

        <div v-if="item.rating>0" class = "q-pt-sm text-h6">
          Additional Notes: {{item.additional}}
        </div>

        <q-space/>
        <!-- <button class="item save">Save item</button> -->
        <q-btn 
        v-if="item.rating == 0 "
        elevated 
        label="Product Request" 
        icon="info"
        class = "q-ma-md item"
        @click="request()" />

        <q-btn 
        v-if="item.rating > 0 "
        elevated 
        icon="announcement"
        label="Report Outdated Information" 
        class = "q-ma-md item "
        @click="outdated()" />

      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { bus } from '../main'
export default {
  name: "Item1",
  props: ["item"],
  data () {
    return {
      card: false,
      ratingColors: [ 'light-green-3', 'light-green-6', 'green', 'green-9', 'green-10' ]
    }
  },
  methods:{
    outdated(){
			this.$router.replace('/n/update_info')
    },
    request(){
      this.$router.replace('/n/product_request')
    }
  },

  mounted(){
    bus.$on("pass-info", () => {
      this.card=true;
    }),
    
    bus.$on("show-item",() => {
      this.card=true
    })
  }
}
</script>
<style scoped>

.button{
  min-width:20vw;
  border-radius:20px;
  color:white;
  background-color:white;
}
.container {
  display:flex;
  flex-direction:column;
  width:100vw;
  height:100wh;
  border-radius:10px;
}
#itemimg {
  border-radius: 10px;
  width: 12em;
  height: 12em;
}

.field-data {
  display: flex;
  text-align:left;
  align-items: center;
  width:auto;
  height:15vh;
  border-radius: 20px;
}

.item {
  width:90.5%;
  background-color:white;
  transition-duration: 0.2s;
  cursor: pointer;
  border-radius: 7px;
}
.item:hover {
  background: #26A69A;
  color: white;
}
.save {
  top: 90%;
  left: 50%;
  margin-left: -25px;
}
:root {
  --star-size: 60px;
  --star-color:grey;
  --star-background: #356809;
}
.icon{
    color:#41B883
}
.Stars {
  display: flex;
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  line-height: 1;
  font-weight: bold;
  border: 1px solid;
}
.Stars::after {
  content: "★★★★★";
  font-size: 2em;
  letter-spacing: 3px;
  background: linear-gradient(
    90deg,
    var(--star-background) var(--percent),
    var(--star-color) var(--percent)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>