<template>
	<q-page class="q-pa-sm q-mx-lg">
		<h2 class="text-dark q-mt-none q-mb-sm">Jerry</h2>
        <p class="text-dark text-h6 text-weight-light q-mb-md"> abc@gmail.com </p>

		<p class="text-secondary text-h6 q-mb-xl"> Exclusive Member since xx/xx/xxxx </p>

		<div class="flex flex-center">
			<!-- LABEL FOR EACH CIRCULAR BAR? -->
			<q-circular-progress
			show-value
			font-size="20px"
			:value="value"
			size="140px"
			:thickness="0.1"
			color="teal"
			track-color="grey-3"
			class="q-ma-lg"
			label="Number of Scanned Items"
			>
			{{ value }}
			</q-circular-progress>

			<q-circular-progress
			show-value
			font-size="20px"
			:value="value"
			size="140px"
			:thickness="0.1"
			color="teal"
			track-color="grey-3"
			class="q-ma-lg"
			>
			{{ value }}
			</q-circular-progress>

			<q-circular-progress
			show-value
			font-size="20px"
			:value="value"
			size="140px"
			:thickness="0.1"
			color="teal"
			track-color="grey-3"
			class="q-ma-lg"
			>
			{{ value }}
			</q-circular-progress>
		</div>
	</q-page>
</template>

<script>
export default {
	data () {
		return {
		value: 81
	}
	}
}
</script>
