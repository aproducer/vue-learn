<template>
	<div id="">
		<h1>Cinema</h1>
		
		<button v-for="item of list" @click="oc(item)">{{item}}</button>
		<router-view/>
	</div>

</template>

<script>
	import router from '../router/index'
	export default {
		data() {
			return {
				list: [1, 2, 3]
			}
		},
		methods:{
			oc(item){
				router.push(`/cinema/${item}`);
			}
		}
	}
</script>

<style>

</style>