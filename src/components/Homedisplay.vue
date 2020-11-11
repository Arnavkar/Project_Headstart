<template> 
		<div>
			
				<div class="q-px-xl q-pt-md text-h3 text-dark text-weight-medium">Hi {{this.name}}!</div>
				<div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Exclusive Member Since {{this.signUpDate}} </div>
				<div class="q-px-xl q-pt-sm text-subtitle2 text-dark text-weight-light">Your sapling can be nourished when you scan more sustainable products</div>
				<q-card 
				elevated
				class = "q-ma-md">
					<img src="../assets/Stage1.png" class="plant_img q-pt-md" v-if="points == 1" style=top:40px;/>
					<img src="../assets/Stage2.png" class="plant_img q-pt-md" v-if="points == 2" style="top: 40px;"/>
					<img src="../assets/Stage3.png" class="plant_img q-pt-md" v-if="points == 3" style="top: 15px; "/>
	
				<select id="points-quantity" v-model.number="points">
						<option>1</option>
						<option>2</option>
						<option>3</option>
				</select>
				</q-card>

			<div class="flex flex-center">
			<!-- LABEL FOR EACH CIRCULAR BAR? -->
			<q-circular-progress
			show-value
			font-size="14px"
			:value= val1
			size="140px"
			:thickness="0.1"
			color="teal"
			track-color="grey-3"
			class="q-ma-lg"
			>
			<div style = "display:flex; flex-direction:column; text-align:center;">
				<h4 class="q-ma-none">{{val1}}</h4> 
				<span>Scanned Items</span>
			</div>
			
			</q-circular-progress>

			<q-circular-progress
			show-value
			font-size="14px"
			:value= val2
			size="140px"
			:thickness="0.1"
			color="teal"
			track-color="grey-3"
			class="q-ma-lg"
			>
			<div style = "display:flex; flex-direction:column; text-align:center;">
				<h4 class="q-ma-none">{{val2}}</h4> 
				<span>Product Requests</span>
			</div>
			
			</q-circular-progress>
		</div>
		</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed:{
		...mapGetters("info",{ userInfo: "info" }),
	},
	data(){
		return{
			name: JSON.parse(localStorage.getItem("userInfo")).Name,
			email: JSON.parse(localStorage.getItem("userInfo")).Email,
			signUpDate: JSON.parse(localStorage.getItem("userInfo")).signUpDate,
			points : 2,
			val1:32,
			val2:23, 
			val3: 4
		}
	}
}
</script>

<style scoped>

.plant_img{
	display: flex;
	margin:auto;
	width: 30vw;
	border-radius:0px;
	position: relative;
	top: 170px;
}

#points-quantity {
	display: block;
	margin-top:50px;
	margin-left: auto;
	margin-right: auto;
}

</style>