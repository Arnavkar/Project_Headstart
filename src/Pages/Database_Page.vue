<template>
	<q-page class="q-pa-sm">
	<portal to="header">
		<p class="text-h4 q-mt-md">Database</p>
	</portal>
		<q-list>
		<ScannedItem
			v-for="(item,key) in database" 
			:key="key"
			:item="item"
			:id="key">
		</ScannedItem>
		</q-list>
	</q-page>
</template>

<script>
	import { mapGetters } from "vuex"
	import ScannedItem from '../components/Scanned_Item.vue'

	export default {
		computed:{
			...mapGetters("database",["database"])
		},

		components:{
			ScannedItem
		} 
	};
</script>

<style scoped>
</style>