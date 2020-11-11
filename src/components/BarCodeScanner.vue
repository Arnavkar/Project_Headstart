<template>
	<div class = "container">
		<div id="scandit-barcode-picker" class="scanner"></div>
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

			const scanditKey="AQlfNRrLBdSsIjzCA0LoElk16WDBGZEY7FC+J9J2dBwDLrJiW3YObNlJbPX2KNjvSEGxytRfxEjideYDR0NxIK05wDX5esQlxmFqHc1+iS/sDhzX52vqEl4f+BleR6CSHSENhZYzplWLJGpMhhf2dT+dw3bt46zk6couMXhHQ84bKJZ0PL4B1TF/1R0f7bySZsomLXI3RwyU5XMj1IOG/t2NlkAJDhJbUY7Ebkx+suQl3bGEN0qne6zoRWQsrFswlVrT0tVi9V9r0HL7Whl0pzMms4Nzv7VlPubv0PFOePwFhvLDbSzK8C1zMod5v8U6c+z1lrGRkanxE2WrOmANctOn1Z2/u3XFlAlaSmI+QQ+w9wmkNdKL3uppR3vBbo3aEXiUvw/nt7fG9iDkNMesxInbFA7LAuzYRsDnWv5ZMJItTjpVh8KBPZ6DLJWrjdZWzy025G7uarMChcKFq9Uf/m5aFA6JCNqom2usk3vrcdqNShyjfZCsLa2seTniPPSr50C8+tZw9Hr+VGh3Dkzjgl+/RO+jYzn9tF3vO7RI/4HSy3PclTL6OxBkOCjnrncX/ix6+S8yi67zWeZU6NW/cAokD6nXhwjBOiothbrkROmykxBbasDKHo2VRmuhAJqxG2YNTO6dowi9QCYoJOBfW+zYmvJfRyEGUrYNWN2feIApgi7lE9dSyJ3g30QkbiUfvsOh46Z7Hxy85BTjtDKFAaQLRSL6GdMTvLjacI7xJFa2cDFYTyC9PLFs6sDFwnhyhxwQN5+y1I8TpJGUblNSQY4sS/hownwoB2gzWq1aGwy7KsNHsXHhWWBz3MNyW0c="

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

#scandit-barcode-picker{
	width:100vw;
	
}



</style>
