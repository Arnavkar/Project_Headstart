<template>
  <q-page >
    <q-card class = "absolute-center">
      <BarCodeScanner/>
    </q-card>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" rel="stylesheet" type="text/css">
    <!-- q card with tabs enabled!-->
    <!-- <q-card id = "scanner" class="my-card text-center">
      <q-tab-panels v-model="tab" animated>
        
        <q-tab-panel name="one">
          <BarCodeScanner class = "scanner"/>
        </q-tab-panel>
        <q-tab-panel name="two">
          <p> Receipt Scanner </p>
        </q-tab-panel>
      </q-tab-panels>
    <q-separator/>
    <q-tabs v-model="tab" class="text-teal ">
      <q-tab label = "Barcode" name="one"/>
      <q-tab label = "Receipt" name="two"/>
    </q-tabs>
  </q-card> -->
  <div>
    <transition 
    name="slide">
      <popup 
      v-if = "displayItem"
      :item= "currentItem"></popup>
    </transition>
  </div>
</q-page>
</template>

<script>
  import popup from '../components/popup.vue'
  import BarCodeScanner from '../components/BarCodeScanner.vue'
  import { bus } from '../main'
  var database = JSON.parse(localStorage.getItem('database'));
  export default{
    name: 'Scanner_Page',
    components: {
      BarCodeScanner, 
      popup
    },
    data(){
      return{
        tab:'one',
        show:true, //MAKE FALSE LATER
        currentItem:{}
      }
    },
    computed:{
      displayItem: {
        get: function(){
          return this.show 
        },
        set: function(){
          return this.show = !this.show
        }
      }
    },
    methods:{
      searchAndRetrieve(string){
        if(database[string]==undefined){
          console.log( "item not found")
          var stockItem = {
            name: "Sorry, we don't have this Item yet!",
            barcode: string,
            image: "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6",
            POM:'NA',
            manufacturer:'NA',
            rating: "NA",
            additional: "Click to Request for Information on this product!"
          }
          return stockItem
        } else {
          return database[string]
        }
      }
    },
    
    mounted(){
      bus.$on('scan-event',(data) => {
        if (this.show==false){
          this.currentItem = this.searchAndRetrieve(data)
          console.log(this.currentItem)
          this.show = true
        } else {
          this.show = false;
          this.currentItem = this.searchAndRetrieve(data)
          setTimeout(function(){bus.$emit('refresh')}, 500)
        }
      })
      bus.$on('refresh',() => {
        this.show = true;
      })
    }
  }
</script>

<style>
.slide-enter-active, .slide-leave-active{
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.slide-enter-active{
  transition-delay: 0.5s
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
.slide-enter-to, .slide-leave{
  opacity: 1;
  transform: translateY(0px);
}
</style>