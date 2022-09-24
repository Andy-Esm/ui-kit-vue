<template>
	<div class="sidebar" :class="{sidebar_isopen: openSidebar}">
		<router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">{{
			link.name
		}}</router-link>
	</div>
</template>

<script setup>
	import {ref} from 'vue';

	const props = defineProps({
		openSidebar: {
			type: Boolean,
			required: true,
		},
	});

	const links = ref([
		{name: 'Typography', href: '/typography'},
		{name: 'Buttons', href: '/buttons'},
		{name: 'Checkbox', href: '/checkbox'},
	]);
</script>

<style lang="scss" scoped>
	.sidebar {
		left: 0;
		top: 62px;
		background-color: #fff;
		position: fixed;
		width: 250px;
		height: 100vh;
		padding: 20px;
		transition: 0.2s;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
		transform: translateX(-250px);
		&_isopen {
			transform: translateX(0);
		}

		&__link {
			display: block;
			border-radius: 12px;
			padding: 10px;
			border: 2px solid #fff;
			transition: 0.2s;
			font-weight: 700;
			margin: 0 0 10px 0;
			&:hover {
				border-color: var(--success-clr);
			}
		}
	}
</style>
