<template>
  <div>
    <div class="text-h5">Alternatives</div>
		<q-card 
		class="my-card"
		bordered
		v-ripple>
      <q-card-section horizontal>
        <q-img 
        class="col imgstyle"
        contain
        :src = "item.image"
        />
        <q-card-section class="q-pa-md bg-white">
          <div class="text-h6 q-mx-md">{{item.name}}</div>
          <!-- <div class="text-subtitle1">{{id}}</div>
          <div class="text-subtitle2">Made by {{item.manufacturer}}, manufactured in {{item.POM}}</div> -->
          <div class="text-subtitle1  q-mx-md">Rating: {{item.rating}} / 5</div>
        </q-card-section>
        <q-space/>
      </q-card-section>
		</q-card>
		<q-separator spaced color="white" />
	</div>
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
    bus.$on("pass-info2", () => {
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