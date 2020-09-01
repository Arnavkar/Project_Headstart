<template>
	<q-page class="q-pa-sm">
		<h5 class>Scanned Items Page</h5>
		<SettingsButton/>
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
import SettingsButton from '../components/Settings_Button.vue'

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
		SettingsButton,
		ScannedItem
	},
};	
</script>

<style scoped>

</style>