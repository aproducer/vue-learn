<template>
	<div id="app">
		<!--<img src="./assets/logo.png">
    <router-view/>-->
	<father />
	</div>
</template>

<script>
	import father from "./components/father"
	export default {
		name: 'App',
		components:{
			father
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>