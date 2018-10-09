<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!--<router-view/>-->
		<!--<sayHi/>-->
		<headbar />
		<sideBar />
	</div>
</template>

<script>
	import sayHi from './components/sayHi';
	import headbar from './components/header';
	import sideBar from './components/sidebar';
	export default {
		name: 'App',
		components: {
			sayHi,
			headbar,
			sideBar

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
/*		margin-top: 60px;*/
	}
	
	body,
	ul,
	li,
	a,
	p,
	input {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	header {
		width: 100%;
		height: 50px;
		background: #3c8dbc;
	}
	
	.logo {
		padding: 0 15px;
		text-align: center;
		float: left;
	}
	
	.logo span {
		width: 200px;
		color: white;
		font-size: 22px;
		line-height: 50px;
		float: left;
	}
	
	.qie {
		color: white;
		font-size: 16px;
		line-height: 50px;
	}
	
	.navbar-btns {
		float: right;
		line-height: 50px;
	}
	
	.navbar-btns li {
		padding: 0 50px;
		float: left;
	}
	
	.navbar-btns li a {
		color: white;
	}
	
	.sideBar {
		width: 230px;
		overflow: hidden;
		background: black;
		float: left;
		height: 678px;
	}
	
	.btn {
		width: 230px;
		height: 44px;
		line-height: 44px;
		color: white;
		text-align: center;
		/*background: #b8c7ce;*/
	}
	
	.btn:hover {
		background: #1e282c;
	}
	
	.content {
		width: 1289px;
		height: 678px;
		background: gainsboro;
		float: left;
	}
</style>