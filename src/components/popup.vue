<template>
	<div class="container">
		<q-card 
		class="my-popup">
			<q-card-section horizontal>
                <q-card-section class = "photo">
					<q-img 
					class="imgstyle"
					contain 
					:src = "item.image"/> 
					<p class=" text-h6 text-dark">$5.00</p>
                </q-card-section>
				<q-btn 
				color="secondary" 
				rounded
				no-caps
				label="More Info"
				class="button-position" 
				v-on:click="passInfo"/>
				<q-card-section horizontal class="text">
					<q-card-actions vertical class = "col">
						<span class="text-h3 text-dark q-mt-md">{{item.name}}</span>
						<q-rating
						:value="item.rating"
						max="5"
						size="5vw"
						color="grey"
						:color-selected="ratingColors"
						icon="eco_border"
						icon-selected="eco"
						readonly/>
						<!-- <span class="text-h7"> Made in {{item.POM}} </span>
						<span class = "text-caption"> {{item.additional}} </span> -->
						<q-btn 
						color="secondary" 
						rounded
						no-caps
						label="View Alternatives"
						class="button-position" 
						v-on:click="passInfo"/>
					</q-card-actions> 
				</q-card-section>
				<q-item-section side>
					<q-card-actions>
						<q-btn 
						class="save"
						flat
						round
						dense
						@click= "isFavorite=!isFavorite"
						color="primary"
						v-bind:icon="log(isFavorite)"
						size="20px"/>
					</q-card-actions>
				</q-item-section> 
			</q-card-section>
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
	width:100%;
	height:20vh;
	border-radius:0px 0px 30px 30px;
	box-sizing: border-box;
}

.text{
	max-width:80vw;
}

.photo{
	display:block;
	width:20vw;
	text-align:center;
}

.imgstyle{
    display: block;
	position: relative;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0%);
	border-radius:300px;
	height:10vw; 
	width:10vw; 
	background-color:#C3EFDB;
}

.save{
	background-color:#C3EFDB;
	border-radius:20px;
	width:7vw;
	height:7vw;
	margin-left: auto;
	margin-right: auto;
	position:absolute;
	top: 16vh;
	right: 10vw;
}

.button-position{
	position:absolute;
	top: 18vh;
	left: 5vw;
	padding-left: 10px;
	padding-right: 10px;
}
</style>
