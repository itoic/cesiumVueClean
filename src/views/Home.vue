<template>
	<div class="map">
		<CesiumViewer />
	</div>
</template>

<script>
	import CesiumViewer from '@/components/CesiumViewer'
	export default {
		name: 'Home',
		components: {
			CesiumViewer
		}
	};
</script>
<style>
	.map {
		width: 100%;
		height: 100%; 
	}
</style>
