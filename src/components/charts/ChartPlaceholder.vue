
<template>
	<div class="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6">
		<h3 class="text-lg font-bold mb-4">Sample Bar Chart</h3>
		<svg :width="width" :height="height">
			<g v-for="(value, i) in data" :key="i">
				<rect
					:x="i * (barWidth + barGap)"
					:y="height - value"
					:width="barWidth"
					:height="value"
					fill="#3b82f6"
				/>
				<text
					:x="i * (barWidth + barGap) + barWidth / 2"
					:y="height - value - 5"
					text-anchor="middle"
					font-size="12"
					fill="#333"
				>{{ value }}</text>
			</g>
		</svg>
	</div>
</template>

<script setup>
const data = [80, 120, 60, 150, 100];
const width = 300;
const height = 180;
const barWidth = 40;
const barGap = 20;
</script>
