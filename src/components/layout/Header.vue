<template>
	<header class="header">
		<router-link to="/" class="header__title">UI KIT V.0.2</router-link>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		background-color: var(--primary-clr);
		font-weight: 700;
		padding: 0 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
		height: 62px;
		display: flex;
		align-items: center;
		z-index: 1;
		position: relative;
	}
	.header__title {
		color: var(--text-clr-main);
	}
</style>
