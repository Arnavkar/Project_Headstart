<template>
	<q-page class="q-px-lg">
		<div class="q-py-md text-h4 text-dark text-weight-medium">Saved Items</div>
		<q-list>
			<ScannedItem
			v-for="(item,key) in items" 
			:key="key"
			:item="item"
			:id="item.barcode">
			</ScannedItem>
		</q-list>
	</q-page>
</template>

<script>
import { mapGetters } from "vuex"
import ScannedItem from '../components/Scanned_Item.vue'	


export default {
	data(){
		return{
		show:true
		}
	},
	computed:{
		...mapGetters("items",["items"]),
		// itemSearch(){
		// 	return this.$store.getters.database.itemSearch('22')
		// }
	},

	components:{
		ScannedItem
	},
};	
</script>

<style scoped>

</style>