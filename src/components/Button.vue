<template>
	<div class="inner-grid btn-wrapper">
		<button class="btn--sm btn-prime">{{ label }}</button>
		<button class="btn--md btn-prime">{{ label }}</button>
		<button class="btn--lg btn-prime">{{ label }}</button>
		<button class="btn--sm btn-outline">{{ label }}</button>
		<button class="btn--lg btn-outline">{{ label }}</button>
		<button class="btn--md btn-outline">{{ label }}</button>
		<button class="btn--sm btn-hover">{{ label }}</button>
		<button class="btn--md btn-hover">{{ label }}</button>
		<button class="btn--lg btn-hover">{{ label }}</button>
		<button class="btn--sm btn-disabled">{{ label }}</button>
		<button class="btn--md btn-disabled">{{ label }}</button>
		<button class="btn--lg btn-disabled">{{ label }}</button>
	</div>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: 'Button',
	},
});
</script>

<style lang="scss" scoped>
.btn-wrapper {
	max-width: 30em;
}

.btn--sm {
	padding: 8px 40px;
	font-size: var(--fs-btn-reg);
	font-weight: var(--fw-btn-sm);
	color: var(--light-clr);
	line-height: 32px;
	border-radius: 8px;
}
.btn--md {
	padding: 14px 40px;
	font-size: var(--fs-btn-reg);
	font-weight: var(--fw-btn-reg);
	color: var(--light-clr);
	line-height: 32px;
	border-radius: 8px;
}
.btn--lg {
	padding: 17px 55px;
	font-size: var(--fs-btn-reg);
	font-weight: var(--fw-btn-lg);
	color: var(--light-clr);
	line-height: 32px;
	border-radius: 8px;
}
.btn-prime {
	background-color: var(--btn-clr);
	color: var();
}
.btn-outline {
	border: 1px solid var(--primary-clr);
	color: var(--primary-clr);
}
.btn-hover {
	background-color: var(--btn-hover);
	border: 1px solid var(--primary-clr);
}
.btn-disabled {
	background-color: var(--btn-disable);
}
</style>
