<template>
	<button @click="show()">son</button>
</template>

<script>
	export default{
		name:"son",
		props:["name"],
		methods:{
			 show(){
				console.log(this.name);
				this.$emit("fromSon","this is the msg from son!")
			}
		}
	}
</script>

<style>
</style>