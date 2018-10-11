<template>
	<div id="">
		<button @click="change">change</button>
		<son :color="color" />
	</div> 
</template>

<script>
	import son from "./son"
	export default {
		name: "father",
		data(){
			return{
				color:"red"
			}
		},
		components: {
			son
		},
		methods:{
			change(){
				this.color=`rgb(${~~(Math.random()*255)},${~~(Math.random()*255)},${~~(Math.random()*255)})`
			}
		}
	}
</script>

<style>

</style>