<template>
  <q-page padding class = "q-pa-md q-gutter-sm">
    <q-dialog 
    v-model = "card">
      <q-card class = "container q-pa-md">
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
          <span class="field-data">
          <q-img 
          id="itemimg"
          contain
          class = "q-mr-md"
          :src="item.image"/>
          <h4> {{item.name}} </h4>
          <!-- <button class = "item"> Back </button> -->
          </span>
          <!-- <p>Category: {{item.cat}}</p> -->
          <p
          class="text-h5">Place of Manufacture: {{item.POM}}</p>
          <!-- <p class="Stars" style="--rating: 3.5;" :border-width="2">Rating:</p> -->
          <q-rating
          :value="item.rating"
          max="5"
          size="3em"
          color="grey"
          :color-selected="ratingColors"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          readonly/>
          <hr style="height:2px;border-width:0;background-color:lightgray" />
          <p
          class = "text-h6">Pros:</p>
          <p>hihi</p>
          <br>
          <p
          class = "text-h6">Cons:</p>
          <p>Con</p>  
          <!-- <button class="item save">Save item</button> -->
          <q-btn 
          elevated 
          label="Product rating request" 
          icon="info"
          class = "q-ma-md item" />

          <q-btn 
          elevated 
          icon="announcement"
          label="Report Outdated Information" 
          class = "q-ma-md item" />

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
  mounted(){
    bus.$on("pass-info", () => {
      this.card=true;
    }) 
  }
}
</script>
<style scoped>

.container {
  width:100%;
  height:100%;
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
  width: 100%;
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