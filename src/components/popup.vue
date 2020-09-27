<template>
	<div class="container">
		<q-card 
		class="my-popup">
			<q-card-section class = "content">
				<div style="display:flex; flex-direction: column;">
					<q-img 
					class="imgstyle"
					contain 
					:src = "item.image"/> 
					<p class=" text-h6 text-dark">$5.00 {{item.price}}</p>
				</div>
				<div class = "q-pl-md" style="display:flex; flex-direction: column;">
					<span class="text-h4 text-dark">{{item.name}}</span>
					<q-rating
					:value="item.rating"
					max="5"
					size="7vw"
					color="grey"
					:color-selected="ratingColors"
					icon="eco_border"
					icon-selected="eco"
					readonly/>
				</div>
			</q-card-section>
			<q-card-section class="text">	
				<!-- <span class="text-h7"> Made in {{item.POM}} </span>
				<span class = "text-caption"> {{item.additional}} </span> -->
				<q-btn 
				color="secondary" 
				id="prompt"
				rounded
				no-caps
				label="More Info"
				class="button" 
				v-on:click="passInfo"/>
				<q-btn 
				color="secondary" 
				id="prompt"
				rounded
				no-caps
				label="View Alternatives"
				class="button" 
				v-on:click="passInfo"/>
				<q-space/>
				<q-btn 
				class="button"
				id="save"
				flat
				round
				dense
				@click= "isFavorite=!isFavorite"
				color="primary"
				v-bind:icon="log(isFavorite)"
				size="20px"/>
			</q-card-section>
			<q-item-section side>
					<q-card-actions>
						
					</q-card-actions>
			</q-item-section> 
		</q-card>
		<infopage
		:item= "item"/>
	</div>
</template>
<script>
import infopage from '../components/ItemInfo.vue'
import { bus } from '../main'
export default {
	name:"pop",
	props:["item"],
	components:{
		infopage
	},
	data(){
		return{
			isFavorite:false,
			string:"favorite_outlined",
			ratingColors: [ 'light-green-3', 'light-green-6', 'green', 'green-9', 'green-10' ]
		}
	},
	methods:{
		log(isFavorite){
			if(isFavorite == true){
				this.string = "favorite"
			} else if(isFavorite == false){
				this.string = "favorite_outlined"
			}
			return this.string
		},
		passInfo(){
			bus.$emit("pass-info")
		}
	}
}
</script>

<style scoped>
.my-popup{
	width:100vw;
	height:17vh;
	border-radius:0px 0px 30px 30px;
	box-sizing: border-box;
	display:flex;
	flex-direction:column;
}

.content{
	width:100vw;
	display:flex;
}

.text{
	margin-top:-1vh;
	display:flex;
	height:5vh;
	max-width:95vw;
	align-items:center;
}

.imgstyle{
	position: relative;
	border-radius:200px;
	height:50px; 
	width:50px; 
	background-color:#C3EFDB;
}

.button{
	position:relative;
	display:flex;
	justify-content:center;
	align-items:center;
}

#save{
	background-color:#C3EFDB;
	border-radius:15px;
	width:45px;
	height:45px;
}

#prompt{
	height:30px;
	margin-left: 7px;
}



</style>
