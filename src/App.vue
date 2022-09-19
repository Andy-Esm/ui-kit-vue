<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import { ref } from "vue";

const isOpenMenu = ref(false);

const toggleMenu = () => {
	isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
	<div>
		<div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
		<layout-header />
		<layout-sidebar :openSidebar="isOpenMenu" />
		<div class="content" :class="{ content_full: !isOpenMenu }">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
@import "@/styles/reset";
@import "@/styles/variables";
@import "@/styles/global";

.sidebar-toggle {
	position: fixed;
	top: 62px;
	left: 0;
	width: 15px;
	background-color: var(--primary-clr);
	height: 100%;
	z-index: 1;
	cursor: pointer;
	color: var(--light-clr);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
