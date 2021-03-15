<template>
	<div class="demo-parser">
		<Card>
			<CardTitle>File upload:</CardTitle>

			<CardBody>
				<InputFile accept=".dem" @change="onChange" />

				<ProgressLinear
					v-if="shouldShowUploadProgress"
					:value="fileUploadingPercentage"
					text="Uploading"
				/>

				<ProgressCircular v-if="isReading" />

				<span v-if="isReading">Reading demo</span>
			</CardBody>

			<CardBody>
				<Button class="justify-content-center" block @click="onClickFakeData"> Fake data </Button>
			</CardBody>
		</Card>
	</div>
</template>

<script lang="ts">
	import { mapActions, mapGetters, mapMutations } from 'vuex';
	import { NS_DEMO_PARSER } from '../store';
	import InputFile from '@Components/InputFile.vue';
	import Card from '@Components/Card.vue';
	import ProgressLinear from '@Components/ProgressLinear.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import CardBody from '@Components/CardBody.vue';
	import ProgressCircular from '@Components/ProgressCircular.vue';
	import Button from '@Components/Button.vue';
	import { RESET_STATE, SET_FAKE_DATA } from '../store/demo-parser/mutations';

	type Data = {
		shouldShowUploadProgress: boolean;
		fileIsRead: boolean;
		fileUploadingPercentage: number;
	};

	export default {
		name: 'DemoParser',

		components: { Button, ProgressCircular, CardBody, CardTitle, ProgressLinear, Card, InputFile },

		data: (): Data => ({
			shouldShowUploadProgress: false,
			fileIsRead: false,
			fileUploadingPercentage: 0,
		}),

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['isReading']),
		},

		methods: {
			...mapActions(NS_DEMO_PARSER, ['parseFile']),
			...mapMutations(NS_DEMO_PARSER, {
				setFakeData: SET_FAKE_DATA,
				resetState: RESET_STATE,
			}),

			onChange(event: Event): void {
				const { files } = <HTMLInputElement>event.target;

				if (!files) {
					return;
				}

				const file = files[0];
				const reader = new FileReader();

				this.resetState();

				reader.onprogress = ({ total, loaded }: ProgressEvent) => {
					const TOTAL_PERCENTAGE = 100;

					this.fileUploadingPercentage = loaded / (total / TOTAL_PERCENTAGE);
					this.shouldShowUploadProgress = this.fileUploadingPercentage !== TOTAL_PERCENTAGE;
				};

				reader.onload = () => {
					this.fileIsRead = true;
					this.parseFile(reader.result);
				};

				reader.readAsArrayBuffer(file);
			},

			onClickFakeData(): void {
				this.setFakeData();
			},
		},
	};
</script>
