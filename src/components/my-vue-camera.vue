<!-- <template>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
  </div>
</template>

<script>
//bar code scanner with Vue Quagga

import Vue from 'vue'
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      console.log('detected', data)
    }

  }
}
</script>
-->

<template>
	<div id = "container">
		<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
		<h1> Start Scanning! </h1>
		<p class = "text"> Scan your way to a sustainable lifestyle </p>
		<video autoplay = "true" id = "vid"></video>
		<div id = "info">
			<span class = "text"> Item info here</span>
		</div>
	</div>
</template>

<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
<script>
	export default{
		data()
		{
			return {};
		},
		mounted()
		{
			async function getDevices(){
				const devices = await navigator.mediaDevices.enumerateDevices();
			}

			var video = document.querySelector("#vid");

			let constraints =
			{
				audio: false, 
				video: {
					width: { exact: 355},
					height: { ideal: 450},
						facingMode: "user" //{ exact: "environment"}

					}
				};

				navigator.mediaDevices.getUserMedia(constraints)
				.then(function (stream)
				{
					try {
						video.srcObject = stream;
					} catch (error) {
						video.srcObject = URL.createObjectURL(stream);
					}
				//info.innerHTML+= "<pre>DONE</pre>";
				console.log("DONE");
			})
				.catch(function(errr)
				{
					console.log ("Smth went Wong");
				});	
			}



		}

	// check if getUserMedia is supported by our browser
	//All we are telling getUserMedia is to specify a constraints object whose video property is set to true. This means that default settings will be used in capturing 

	//getusermedia takes one argument known as constraints, controlling whether video is allowed, audio is allowed, choosing a front facing camera or a back facing one etc. 

	//Beyond constraints, there is another very important detail we need to know about the getUserMedia method. What it returns is a promise that resolves to an object of type MediaStream. When the promise successfully resolves, you can access the underlying media stream and perform any additional actions.


	// Quagga.init({
	// 	inputStream:{
	// 		name : "Live",
	// 		type : "LiveStream",
	// 		target: document.querySelector("#vid"),
	// 	},
	// 	decoder:{
	// 		readers:["code_128_reader"]
	// 	}
	// }, function(err){
	// 	if(err){
	// 		console.log(err);
	// 		return
	// 	}
	// 	console.log("Init finished, ready to start")
	// 	Quagga.start();
	// });

</script>

<style>
#container{
	font-family:'Montserrat';
	margin: 0px auto;
	width: 377px;
	height: 814px;
	border-style: solid;
	border-color: black;
	border-width: 1px;
	
	box-sizing:border-box;
	border-radius: 30px;
	overflow: hidden;

	background-color:"white"
}

video{
	-webkit-transform: scaleX(-1);
	margin-left:10px;
	margin-top:0em;
	border-radius:30px;
	border-width:1px;
	border-style:solid;
	border-color: rgb(170,235,170);
}

h1{
	padding-left:20px;
	margin-bottom:-15px;
}

.text{
	padding-left:20px;
}

#info{
	position:relative;
	top:-4px;
	width:1;
	height:202px;
	background-color: rgb(170,235,170);
	border-radius: 30px;
}


</style>