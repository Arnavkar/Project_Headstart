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
						<q-btn clickable color="secondary" label="More Info" size="13px" class="q-mt-sm"/>
                </q-card-section>
				<q-separator vertical inset />
				<q-card-section horizontal class="text q-ma-md">
					<q-card-actions vertical>
						<span class="text-h6">{{item.name}}</span>
						<q-space/>
						<span class="text-h6">Country of Manufacture: {{item.POM}} </span>
						<q-space/>
						<span class="text-h6">Rating: {{item.rating}} / 5</span>
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
	</div>
</template>
<script>
export default {
	name:"pop",
	props:["item"],
	data(){
		return{
			isFavorite:false,
			string:"favorite_outlined"
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
	width:200px;
	text-align:center;
}

.container{
	display:flex;
}

</style>
