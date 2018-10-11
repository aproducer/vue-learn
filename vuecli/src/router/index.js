import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Cinema from '@/components/cinema'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/cinema',
			component: Cinema,
			children: [{
				path: ':id',
				component: Detail,
			}]
		}
	]
})