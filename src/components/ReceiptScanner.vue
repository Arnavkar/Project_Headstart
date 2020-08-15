<template>
	<div class = "container">
		<h1>START WORK ON NAVIGATION ADDED IN</h1>
		<video autoplay = "true"></video>
		<canvas></canvas>
		<button class = "snap" v-on:click = "this.capture">
			<span class="material-icons" id = "icon"> camera </span>
		</button>

		<!-- <router-view/> -->
		<!-- <router-link to="/Profile"></router-link> -->

	</div>
</template>

<script>
	export default{
		name:'camera',
		methods:{
			init(){
				//NOTE: constraint height will eventually need to be altered to fit the entire screen
				//for now, use half the screen to test the canvas based screenshot
				let constraints = {
					audio: false, 
					video: {
						width: { exact: 377}, 
						height: { exact: 400}, 
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
					//let ratio = (377/400);
					const pic = document.querySelector("canvas");
					const ctx = pic.getContext("2d");
					ctx.imageSmoothingEnabled = true;
					ctx.imageSmoothingQuality = "high";
					ctx.drawImage(document.querySelector("video"),0,0,pic.width,pic.height);
				}	
			},

			beforeMount(){
				this.init()
			}	
		}

</script>
	<style lang = "scss" scoped>

	.container{
		width:377px;
		height:812px;
		text-align: center;
		background-color: #171717;
		
		video{
			-webkit-transform: scaleX(-1);
			margin: 0 auto;
			border-radius:30px;
		}

		canvas{
			-webkit-transform: scaleX(-1);
			width: 377px;
			height: 400px;
			background-color:rgb(200,200,200);
			border-radius:30px;
		}


		.snap{
			position:absolute;
			top:735px;
			left:163.5px;
			align:center;
			width: 60px;
			height: 60px;
			border-radius: 50%;

			background-color: rgba(250,250,250,0.8);
			border: 1px solid rgba(100,100,100,0.5);
			outline: none;

			cursor: pointer;

			&:active{
				background-color: darken($color: rgb(200,200,200), $amount: 10);
			}
		}

		#icon{
			position:absolute;
			font-size:60px;
			top:-1px;
			left:-2px;
			

		}
	}
</style>