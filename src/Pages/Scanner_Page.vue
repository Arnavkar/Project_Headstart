<template>
  <div id = "app">
    <ReceiptScanner/>
  </div>
</template>

<script>
  import ReceiptScanner from '../components/BarCodeScanner.vue'

  export default{
    name: 'Scanner_Page',
    components: {
      ReceiptScanner, 
    }
  }
</script>
