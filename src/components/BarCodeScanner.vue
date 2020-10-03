<template>
	<div class = "container">
		<!-- <title>Scandit Example Page</title> -->
		<div id="scandit-barcode-picker" class="scanner"></div>
		<!-- <div id="scandit-barcode-result" class="result-text"></div> -->
	</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x"></script>
<script>
	
	import Vue from 'vue'
	import * as ScanditSDK from 'scandit-sdk';
	import { bus } from '../main'

	Vue.use(ScanditSDK);

	var code;
	var type;

	// USING EVENT BUS INSTEAD
	// var vm = new Vue({
	// 	methods: {
	// 		getBarcode() {
	// 			localStorage.setItem('barcode', code);
	// 		},
	// 	}
	// })

	export default{
		name: 'BarcodeTest',

		created:function(){

			//let proxyurl = "https://cors-anywhere.herokuapp.com/";
			//const api_key = "YOUR API KEY"; 

			const scanditKey="AXHfLT1wIjwNBK0auAbn5FMHc/IuLx5l3HWzOK4vx9QlMyR7pR4SntN0eVCia6XYpWDew01VKzoyRen7Mn0beWZucX/PO4G/0hModqlE3++tZ9mJ9QMEUqp56t4ZIsaa0DBRFZUqfXTfeB5xCmQbYpNN7KSSdfsD1k68/idtNopeOT5j2Cw4JEIbw7zyCZKysLFaE/HPP0gX47Bu98mENu0haZcIgWDiUXic/MU5mbzp1POhnp+4TsMDDKJLODhavSbjGRJ4C6pMFrkexKzXqkM+XT7aif+4pYjRv14q+HxiLhUC3Sh2PWzHRslvUfN9l4nyYjMwFgGnuwArjLq/BYR1KUmY8sezQwB+SXALqGReFxesT5E/NIWepJQYreoMFuQKhleblaYv5wOoMt07pXq0x5kotCY+DzhpQCvmwZHr8U+MLqhGYanjYjnljZ94wH3LS5xT8Z8uoV1HcxLrTdx05jZ7mOLtQsXs+bQzdK5bsVxMxpSUfewJGex9CNFrpA3mjhcOKS6au05NeVhURk8H6Q9UsAKVfP07sEAHYolTxnBeu/LHQgFLsm8VHhr9FBh4sUucxL4bj0gOUmnmFcthhhSJBqG8zvjFNq2lhzWgQ2Hxv4HjTFAV29nMjc3o8vYXh44bwmyw04XhUdIA9fcNR2v3UtCeUE/p8/9+2OFUPDDKIh/q4E9WatN0irnKXZMz+PaqsoEC4l0wipMTeuH5BE7b18Zvf3AcvPHJjKGt6AMBXCgWHnjx/TzuyRnhTrgEDQ02OU0SnBZBXByqh9SeDaZeTiY5wPHyyvlXJimc4nhVrW+XS1NMFJaps34oxMM9i4ycrvyhi7sUGckuc6vXw0/JNzAW+kvCffDkIQ"

			const scanditEngine="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"
			ScanditSDK.configure(scanditKey, {
				engineLocation:scanditEngine,
			}).then(function() {
				return ScanditSDK.BarcodePicker.create(
					document.getElementById("scandit-barcode-picker"), 
					{ playSoundOnScan: true }
				).then(function(barcodePicker) {
					var scanSettings = new ScanditSDK.ScanSettings({ 
						enabledSymbologies: [
						"ean8", 
						"ean13", 
						"upca", 
						"upce", 
						"code128", 
						"code39", 
						"code93", 
						"itf"
						], 
						codeDuplicateFilter: 1000 });
					barcodePicker.applyScanSettings(scanSettings);
					// barcodePicker.setGuiStyle("viewfinder");
					// barcodePicker.setViewfinderArea(200,300);

					barcodePicker.on("scan", function(scanResult) {
						scanResult.barcodes.reduce(function(string, barcode) { 
							code = (string + barcode.data);
							type = (string + ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology));
							return type + ":" + code;
						}, "");
						// vm.getBarcode()  USING EVENT BUS INSTEAD
						bus.$emit('scan-event', code)
					})
					.on("scanError", function(error) {
						console.error(error);
					});
				});
			}).catch(function(error) {
				console.error(error);
				alert(error);
			});
		},
	}
</script>

<style>

/* .scanner {
	position: absolute;
	max-width: 1280px;
	height: 100%;
} */

</style>
