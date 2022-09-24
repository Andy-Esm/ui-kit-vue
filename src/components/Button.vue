<template>
	<div>
		<button
			:class="[
				'btn',
				`btn--${size}`,
				`btn--${color}`,
				{'btn--outline': outlined},
				{'btn--disabled': disabled},
				{'btn--icon': icon},
			]"
			@click="clickOnButton"
		>
			<span v-if="icon">
				<font-awesome-icon :icon="`fa-regular fa-${icon}`" />
			</span>
			<span v-else>{{ label }}</span>
		</button>
	</div>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: 'Button',
		},
		size: {
			type: String,
			default: 'sm',
		},
		color: {
			type: String,
			default: 'prime',
		},
		disabled: {
			type: Boolean,
			required: false,
		},
		outlined: {
			type: Boolean,
			required: false,
		},
		icon: {
			type: String,
			required: false,
		},
	});
	const emit = defineEmits(['click']);

	const clickOnButton = () => {
		emit('click');
	};
</script>

<style lang="scss" scoped>
	.btn {
		display: grid;
		align-items: center;
		border-radius: 8px;
		background-color: var(--btn-clr);
		color: var(--light-clr);
		transition: all 0.2s ease-in-out;

		&--prime {
			background-color: var(--btn-clr);

			&:hover {
				background-color: var(--btn-hover);
			}
		}

		&--outline {
			background-color: transparent;
			border: 1px solid var(--primary-clr);
			color: var(--primary-clr);

			&:hover {
				background-color: var(--btn-hover);
				color: var(--light-clr);
			}
		}

		&--hover {
			background-color: var(--btn-hover);
			border: 1px solid var(--primary-clr);
		}

		&--disabled {
			background-color: var(--btn-disable);
			cursor: default;
			&:hover {
				background-color: var(--btn-disable);
			}
		}

		&--sm {
			padding: 8px 40px;
			font-size: var(--fs-btn-reg);
			font-weight: var(--fw-btn-sm);
		}

		&--md {
			padding: 14px 40px;
			font-size: var(--fs-btn-reg);
			font-weight: var(--fw-btn-reg);
		}

		&--lg {
			padding: 17px 55px;
			font-size: var(--fs-btn-reg);
			font-weight: var(--fw-btn-lg);
		}

		&--icon {
			padding: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
</style>
