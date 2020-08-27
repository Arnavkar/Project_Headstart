<template>
	<q-page class="q-pa-sm">
		<h5 class>Scanned Items Page</h5>
		<SettingsButton/>
		<q-list>

			<ScannedItem
			v-for="(item,key) in items" 
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
	import SettingsButton from '../components/Settings_Button.vue'

	export default {
		computed:{
			...mapGetters("items",["items"])

		},

		components:{
			SettingsButton,
			ScannedItem
		} 
	};
</script>

<style scoped>
</style>