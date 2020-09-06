<template>
	<div>
		<q-card 
		class="my-card"
		v-ripple>
			<q-card-section horizontal>
				<q-img 
				class="col"
				style="min-width:120px; max-width:120px; height:150px"
				contain
				:src = "item.image"/>
				<q-separator vertical inset/>

				<q-card-section class="q-pa-md">
					<div class="text-h6">{{item.name}}</div>
					<!-- <div class="text-subtitle1">{{id}}</div>
					<div class="text-subtitle2">Made by {{item.manufacturer}}, manufactured in {{item.POM}}</div> -->
					<div class="text-h6">Rating: {{item.rating}} / 5</div>
				</q-card-section>
				<q-space/>
				<q-item-section side>
					<q-btn 
					@click.stop="promptToDelete(id)" 
					flat
					color="bg-dark"
					icon= "delete"
					size="15px"
					dense/>
				</q-item-section> 
			</q-card-section>
		</q-card>
		<q-separator spaced color="white" />
	</div>
	<!-- Maybe Use a QResponsive Above? -->
</template>

<script>
import {mapActions} from 'vuex'
export default{
	props:['item','id'],
	methods:{
		...mapActions('items',['deleteItem']),
		promptToDelete(id){
			this.$q.dialog({
				title:'Confirm',
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
		}
	}
}

</script>

<style scoped>
.my-card{
	height:150px;
}

</style>
