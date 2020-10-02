<template>
	<div>
		<q-card 
		class="my-card"
		bordered
		v-ripple>
		<q-slide-item 
		@right="onRight" 
		@action="promptToDelete(id)"
		right-color="primary" 
		class="bg-transparent">
			<template v-slot:right>
				<div class="row items-center">
					<q-icon 
					right 
					name="mdi-delete-empty" 
					size="50px"/>
				</div>
			</template>
			<q-card-section horizontal>
				<q-img 
				class="col imgstyle"
				contain
				:src = "item.image"
				/>

				<!-- <q-separator vertical inset/> -->

				<q-card-section class="q-pa-sm bg-white">
					<div class="text-h6 q-mx-md">{{item.name}}</div>
					<!-- <div class="text-subtitle1">{{id}}</div>
					<div class="text-subtitle2">Made by {{item.manufacturer}}, manufactured in {{item.POM}}</div> -->
					<q-rating
					class="q-pa-sm"
					:value="item.rating"
					max="5"
					size="9vw"
					color="grey"
					:color-selected="ratingColors"
					icon="eco"
					icon-selected="eco"
					readonly/>

				</q-card-section>

			</q-card-section>
		</q-slide-item>
		</q-card>
		<q-separator spaced color="white" />
	</div>
</template>

<script>
import {mapActions} from 'vuex'

export default{
	props:['item','id'],
	data(){
		return{
			ratingColors: [ 'light-green-3', 'light-green-6', 'green', 'green-9', 'green-10' ]
		}
	},
	methods:{
		...mapActions('items',['deleteItem']),
		promptToDelete(id){
			this.$q.dialog({
				title:'Confirmation',
				message: "Would you like to delete this item?",
				ok:{
					color:'primary'
				},
				cancel:{
					color:'negative'
				},
				persistent: true
			}).onOk(()=>{
				this.deleteItem(id)
			})
		},
		onRight ({ reset }) {
		// this.$q.notify('Right action triggered. Resetting in 1 second.')
		this.finalize(reset)
		},
		finalize (reset) {
			this.timer = setTimeout(() => {reset()}, 800)
		},
		beforeDestroy () {
			clearTimeout(this.timer)
		},
    }
}

</script>

<style scoped>
.my-card{
	/* height:150px; */
	border-radius: 15px;
    box-shadow: 0 2px 4px 0 rgba(65, 184, 131, 0.4), 0 3px 10px 0 rgba(65, 184, 131, 0.19);
}
/* 
.imgstyle{
	max-width: 20vw !important;
	background-color: #C3EFDB;
	border-radius: 100px ;
} */


</style>
