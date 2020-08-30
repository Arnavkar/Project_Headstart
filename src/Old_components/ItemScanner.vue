<!-- Using Vue Quagga Package -->
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
	<div class = "container">
		<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
		<h1> Start Scanning! </h1>
		<p id = "text"> Scan your way to a sustainable lifestyle </p>
		<video autoplay = "true" class = "container"  id = "vid"></video>
		
		<div id = "info">
			<span class = "text"> Item info here</span>
		</div>
	</div>
</template>

<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>

<script>
	export default{
		name:'camera',
		methods:{
			init(){

				let constraints = {
					audio: false, 
					video: {
						width: { exact: 360}, // need to change
						height: { exact: 430},
							facingMode: "user" //{ exact: "environment"}
						}
					};
					if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
						navigator.mediaDevices.getUserMedia(constraints).then (stream => {
							const videoPlayer = document.querySelector("video");
							videoPlayer.srcObject = stream;
							videoPlayer.play();
						});
					} else {
						alert("Can't find Camera");
					}
				},

				capture(){
					console.log("picture taken");
				}	
			},

			beforeMount(){
				this.init()
			}	
		}


	// check if getUserMedia is supported by our browser
	//All we are telling getUserMedia is to specify a constraints object whose video property is set to true. This means that default settings will be used in capturing 

	//getusermedia takes one argument known as constraints, controlling whether video is allowed, audio is allowed, choosing a front facing camera or a back facing one etc. 

	//Beyond constraints, there is another very important detail we need to know about the getUserMedia method. What it returns is a promise that resolves to an object of type MediaStream. When the promise successfully resolves, you can access the underlying media stream and perform any additional actions.

</script>

<style>

.container{
	text-align:center;
	box-sizing: border-box;
}

video{
	-webkit-transform: scaleX(-1);
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
	display:flex;
	position:relative;
	margin-top:-4px;
	height:300px;
	background-color: rgb(170,235,170);
	border-radius: 30px;
}


</style>