<template>
	<div id="app">
		<img src="./assets/logo.png"><br />
		<router-link tag='button' to='/cinema'>Cinema</router-link>
		
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		beforeCreate() {
			console.log("beforeCreate")
		},
		created() {
			console.log("create")
		},
		beforeMount() {
			console.log("beforeMount")
		},
		mounted() {
			console.log("mounted")
		},
		beforeUpdate() {
			console.log("beforeUpdate")
		},
		updated() {
			console.log("updated")
		},
		beforeDestroy() {
			console.log("beforeDestroy")
		},
		destroyed() {
			console.log("destroyed")
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