<template>
	<div>
		<q-card 
		class="my-popup">
			<q-card-section class = "content q-pt-none">
				<div style="display:flex; flex-direction: column; align-items:center;">
					<q-img 
					class="imgstyle"
					contain 
					:src = "item.image"/> 
					<p class="text-body1 text-dark p-pt-sm">${{item.price}}</p>
				</div>
				<div class = "q-pl-md" style="display:flex; flex-direction: column;">
					<span class="text-h5 text-weight-bold text-dark">{{item.name}}</span>
					<q-rating
					class="q-mt-sm"
					v-if="item.rating > 0"
					:value="item.rating"
					max="5"
					size="9vw"
					color="grey"
					:color-selected="ratingColors"
					icon="eco"
					icon-selected="eco"
					readonly/>

					<span 
					class="text-h7 text-dark"
					v-if="item.rating == 0"
					>Click on below to submit a request!</span>
				</div>
				<q-space/>
				<q-btn round flat id="close" icon="close" color="primary"  @click="close()" />
			</q-card-section>
			<q-card-section class="text">	
				<!-- <span class="text-h7"> Made in {{item.POM}} </span>
				<span class = "text-caption"> {{item.additional}} </span> -->
				<q-btn 
				v-if="item.rating > 0"
				color="secondary" 
				id="prompt"
				rounded
				no-caps
				label="More Info"
				class="button" 
				v-on:click="passInfo"/>
				<q-btn 
				v-if="item.rating == 0"
				color="secondary"
				id="prompt"
				rounded
				no-caps
				label="Request to add this product!"
				class="button" 
				v-on:click="passInfo"/>
				<q-btn 
				v-if="item.rating > 0"
				color="secondary" 
				id="prompt"
				rounded
				no-caps
				label="View Alternatives"
				class="button" 
				v-on:click="showAlt"
				/>
				<q-space/>
				<q-btn 
				v-if="item.rating > 0"
				class="button"
				id="save"
				flat
				round
				dense
				@click= "isFavorite==true"
				v-on:click="add"
				color="primary"
				:icon="this.string"
				size="20px"/>
			</q-card-section>
		</q-card>
		<infopage
		:item= "item"/>
		<altpage
		:item= "item"/>
	</div>
</template>
<script>
import infopage from '../components/ItemInfo.vue'
import altpage from '../components/Alternatives.vue'
import { bus } from '../main'
import {mapActions} from 'vuex'
export default {
	name:"pop",
	props:["item"],
	computed:{
		...mapActions('items',['addItem','deleteItem']),
	},
	components:{
		infopage,
		altpage
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
		},
		showAlt(){
			bus.$emit("show-alt")
		},
		close(){
			bus.$emit("close")
		},
		add(){
			var payload = JSON.parse(localStorage.getItem('currentItem'))
			this.addItem(payload)
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
	align-items: top;
}
.text{
	display:flex;
	margin-top:-3vh;
	height:5vh;
	max-width:95vw;
	align-items:center;
}
.imgstyle{
	position: relative;
	border-radius:200px;
	height:70px; 
	width:70px; 
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
#close{
	width:40px;
	height:40px;
}
#prompt{
	height:30px;
	margin-left: 7px;
}
</style>