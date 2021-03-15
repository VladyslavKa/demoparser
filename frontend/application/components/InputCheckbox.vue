<template>
	<div class="input-checkbox">
		<input
			:id="id"
			:name="name"
			type="checkbox"
			:checked="value"
			:value="value"
			@change="$emit('change', $event.target.checked)"
		/>
		<label :for="id">
			{{ label }}
		</label>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'InputCheckbox',

		model: {
			prop: 'value',
			event: 'change',
		},

		props: {
			value: {
				type: Boolean,
				default: false,
			},

			id: {
				type: String,
				default: '',
			},

			name: {
				type: String,
				default: '',
			},

			label: {
				type: String,
				default: '',
			},
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) './../../assets/styles/_core';

	@input-checkbox-bg-checked: darken(@main-background-color, 2%);
	@input-checkbox-border-color: @main-text-color;
	@input-checkbox-icon-size: 20px;

	.input-checkbox {
		input {
			display: none;

			& + label {
				cursor: pointer;
				.d-flex();

				&:before {
					content: '';
					.d-inline-flex();
					.justify-content-center();
					flex-shrink: 0;
					width: @input-checkbox-icon-size;
					height: @input-checkbox-icon-size;
					background-color: @input-checkbox-bg-checked;
					border: 1px solid @input-checkbox-border-color;
					.mr-2();
				}
			}

			&:checked {
				& + label {
					&:before {
						content: '✓';
					}
				}
			}
		}
	}
</style>