<template>
	<h1 v-change="color">Color Change</h1>
</template>

<script>
	export default{
		name:"son",
		props:["color"],
		directives:{
			change:(el,color)=>{
				console.log(el,color.value);
				el.style.color=color.value;
			}
		}
	}
</script>

<style>
</style>