<template>
	<div class="container flex-columns">
		<span class="display-xxl">Display-1</span>
		<span class="display-xl">Display-2</span>
		<h1 class="heading-h1">Heading-h1</h1>
		<h2 class="heading-h2">Heading-h2</h2>
		<h2 class="heading-h3">Heading-h3</h2>
		<h2 class="heading-h4">Heading-h4</h2>
		<h2 class="heading-h5">Heading-h5</h2>
		<h2 class="heading-h6">Heading-h6</h2>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.display-xxl {
	font-size: var(--fs-display-xxl);
	font-weight: var(--fw-display-xxl);
}
.display-xl {
	font-size: var(--fs-display-xl);
	font-weight: var(--fw-display-xl);
}
</style>
