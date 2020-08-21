<template>
	<div class = "container">
		<title>Scandit Example Page</title>
		<div id="scandit-barcode-picker" class="scanner"></div>
		<div id="scandit-barcode-result" class="result-text">
			{{barCode}}
			<img :src= "this.imgLink" id="kitty">
			<div id = "ProductName"> {{ProductName}} </div>
		</div>
	</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x"></script>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs*/

	import Vue from 'vue'
	import * as ScanditSDK from 'scandit-sdk';

	Vue.use(ScanditSDK);

	export default{
		name: 'BarcodeTest',
		data: function(){
return{  // all variables here should eventually be dynamically assigned
	barCode:"",
	imgLink:"https://placekitten.com/g/74/76",
	ProductName: ""
}
},

created:function(){

/*
ScanditSDK.configure("YOUR_LICENSE_KEY", {
engineLocation: "CDN OR PATH TO SCANDITSDK",
})
*/

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const api_key = "YOUR API KEY"; 

ScanditSDK.configure("AX7OUjpwJQErLLulGAinuoQtpKRwQ7COcxp801gTgb7pCchbeAUP0od/nW6af14TEkd6nVho6DIfT4esezf5PdFMMEgIaX8yvH+1pzBiekkrNxvTIxSTbvs46/leHt2pUsNuRNQ5G9aDNtLdR/dOlk56GM8b84Mx2PBpCuArj4+mmkh/H3BuObEjS+B1hyGnmbglA3JP+mf66tfN7e34OSATea+967mxFqRQblBB2NGIXEuCu2cl5vCw7Iu7BsmT+om7bBIjHX29CYJfy/afu5cK3+maogc4S26pZeyk1x6ng0zK4D6Timze4MnsY2kBnIQGn3V7AEIcvoVwyXaqqGv8pxpCQnzo+pMo7DUq5lECSNwIk4Er5nxMr194iopi640Di6Bd+EVF5B57S7RNNQ6k9n280Pa4XvbPlNqhuiNg4fvwcIEZ3+7uajPHEYmV1VwiaeuhXCHQeGh41TC/J4WTimENeYrxxgwFGw1ZiWBTJwyDPlMporPt0azEhhsaUmubVCjlJC0gkmWDuBW7c12yZCn34QSb7EfrGMoJjy/ZVefgzN2gboHJ480BB6YGJcOdxCNmSGVDUaGYFf5UcfKgERXtBSdu6bDy8wD9T1uLATAr6wjJ+LgO1ZK5UH+YrsCwZrjw1sOZvgYvBnhR6FAlyjqlkxgNFEQCOl6aIIokOL6tZkp1optZ5VA/BkWplZ5EHNLXLiWOPen+uO5duh9wBFEdy+UdzPDiMsPIEM9hgIvSurksK+ksmjkF8iZOW/3Zh6dDvQXx021cicTdLEwa/8VIHA6AkoefalV9", {
	engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
}).then(function() {
	return ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), { playSoundOnScan: true })
	.then(function(barcodePicker) {
		var scanSettings = new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"], codeDuplicateFilter: 1000 });
		barcodePicker.applyScanSettings(scanSettings);
		barcodePicker.setGuiStyle("viewfinder");
		barcodePicker.setViewfinderArea(400,300);

		barcodePicker.on("scan", function(scanResult) {
			// intermediate result achieved by setting inner HTML
			document.getElementById("scandit-barcode-result").innerHTML =
			scanResult.barcodes.reduce(function(string, barcode) { 
				const code = (string + barcode.data);

				const type = (string + ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology));

			/*

		CODE TO FETCH DATA FROM BARCODE LOOKUP - TRIAL HAS EXPIRED FOR THE MONTH :(

		const url = proxyurl + "https://api.barcodelookup.com/v2/products?barcode=" + barcode.data + "&formatted=y&key=" + api_key;
		fetch(url).then(response => response.json()).then((data)=>{
		console.log(data.products[0]);
		document.getElementById("ProductName").innerHTML = data.products[0].product_name
		})
		.catch(err => { 
		throw err 
		});

		*/

		/* FOR LOUIS - How do i reactively assign a value to this? this particular line of code below gives me errors saying that "cannot set property barCode of undefined" 
		this.barCode = code;*/

		return type + ":" + code;
		}, "");
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

	mounted(){

		/* FOR LOUIS -> I was also thinking of shifting the method barcodePicker.on{...} into mounted() here to separate the initialization and method that runs the scan. However the name "barcodePicker" is passed from a series of then statements but not an actual variable so how do I access it from here?*/

	}
}

/* eslint-disable no-mixed-spaces-and-tabs*/
</script>

<style>
.container{
}

.scanner {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	max-width: 1280px;
	max-height: 100%;
}

.result-text {;
	padding: 1rem;
	font-size: 30pt;
	text-align: center;
}
</style>