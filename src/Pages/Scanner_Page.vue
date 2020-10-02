<template>
<q-page class = "container">
  <q-card class = "absolute-center">
    <BarCodeScanner/>
  </q-card>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" rel="stylesheet" type="text/css">
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
        show:false,
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
            barcode: string,
            image: "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6",
            name: "Sorry, we don't have this Item yet!",
            category: "-",
            price:"-",
            m1:"0",
            m2:"0",
            m3:"0",
            p1:"0",
            p2:"0",
            p3:"0",
            i1:"0",
            i2:"0",
            i3:"0",
            i4:"0",
            rating: 0,
            additional:"-"
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
          localStorage.setItem("currentItem",JSON.stringify(this.currentItem))
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

      bus.$on('close',() => {
        this.show = false;
      })

    }
  }
</script>

<style>
.container{
  max-height:100%;
  max-width:100vw;
}
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
  opacity: 100;
  transform: translateY(0px);
}
</style>