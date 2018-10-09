<template>
	<div id="">
		<h1>father</h1>
		
		<son name="son!" @fromSon="show" />
	</div>
</template>

<script>
	import son from "./son"
	export default {
		name: "father",
		components: {
			son
		},
		methods:{
			show(msg){
				console.log(msg)
			}
		}
	}
</script>

<style>

</style>