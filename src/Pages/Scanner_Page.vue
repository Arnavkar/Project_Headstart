<template>
  <q-page padding class>
    <q-card>
      <BarCodeScanner/>
    </q-card>
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
  <div id = "test"></div>
</q-page>
</template>

<script>
  
  import BarCodeScanner from '../components/BarCodeScanner.vue'

  export default{
    name: 'Scanner_Page',
    components: {
      BarCodeScanner, 
    },
    data(){
      return{
        tab:'one'
      }
    },
  }

</script>

<style>
.scanner{
  justify-items:center;
}
</style>