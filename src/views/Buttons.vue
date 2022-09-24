<template>
	<div class="container">
		<h1 class="heading-h1">Buttons</h1>
		<div class="inner-grid">
			<div class="btn-wrapper">
				<h4 class="heading-h4">Small</h4>
				<Button label="Primary" color="prime" />
				<Button label="Primary" :outlined="true" />
				<Button label="Primary" color="hover" />
				<Button label="Primary" :disabled="true" />
			</div>
			<div class="btn-wrapper">
				<h4 class="heading-h4">Medium</h4>
				<Button label="Primary" color="prime" size="md" />
				<Button label="Primary" size="md" :outlined="true" />
				<Button label="Primary" color="hover" size="md" />
				<Button label="Primary" size="md" :disabled="true" />
			</div>
			<div class="btn-wrapper">
				<h4 class="heading-h4">Large</h4>
				<Button label="Primary" color="prime" size="lg" />
				<Button label="Primary" size="lg" :outlined="true" />
				<Button label="Primary" color="hover" size="lg" />
				<Button label="Primary" size="lg" :disabled="true" />
			</div>
		</div>
		<div class="flex icon-block">
			<h4 class="heading-h4">Icon</h4>
			<Button color="prime" icon="heart" />
			<Button color="prime" icon="hand" />
			<Button color="prime" icon="address-book" />
			<Button color="prime" icon="credit-card" />
			<Button color="prime" icon="lemon" />
			<Button color="prime" icon="hourglass" />
		</div>
		<div class="event-block">
			<h4 class="heading-h4 event-block__title">Event</h4>
			<Button label="@click" color="prime" size="md" @click="eventForButton" />
		</div>
	</div>
</template>

<script setup>
	import Button from '@/components/Button.vue';

	const eventForButton = () => {
		alert('you click');
	};
</script>
<style lang="scss" scoped>
	.btn-wrapper {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin: 0 0 48px 0;
	}
	.icon-block {
		margin: 0 0 48px;
	}
	.event-block {
		display: flex;
		gap: 24px;
	}
</style>
