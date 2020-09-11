<template>
	<div class="container">
		<q-card 
		class="my-popup"
		bordered>
			<q-card-section horizontal>
                <q-card-section class = "photo">
						<q-img 
						style= "height:125px"
						contain
						:src = "item.image"/>
						<q-btn color="secondary" label="More Info" size="13px" class="q-mt-sm" v-on:click="passInfo"/>
                </q-card-section>
				<q-separator vertical inset />
				<q-card-section horizontal class="text q-ma-sm">
					<q-card-actions vertical class = "col">
						<span class="text-h6">{{item.name}}</span>
						<q-rating
						:value="item.rating"
						max="5"
						size="25px"
						color="grey"
						:color-selected="ratingColors"
						icon="eco_border"
						icon-selected="eco"
						readonly/>
						<span class="text-h7"> Made in {{item.POM}} </span>
						<span class = "text-caption"> {{item.additional}} </span>
					</q-card-actions>
				</q-card-section>
				<q-space/>
				<q-item-section side>
					<q-card-actions>
						<q-btn 
						flat
						round
						dense
						@click= "isFavorite=!isFavorite"
						color="red"
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
	height:205px;
	border-radius:0px 0px 30px 30px;
	box-sizing: border-box;
}

.text{
	max-width:280px;
}

.photo{
	width:150px;
	text-align:center;
}


</style>
