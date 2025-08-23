<template>
	<header class="w-full bg-white shadow flex items-center justify-between px-6 py-4">
		<div class="font-bold text-lg">CognitiveMetricsAI</div>
		<nav class="flex items-center space-x-6">
			<ul class="flex space-x-4">
				<li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
				<li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
				<li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
			</ul>
					<div class="relative">
						<button @click="toggleProfile" class="ml-4 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</button>
						<div v-if="showProfile" class="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50">
							<UserProfile />
						</div>
					</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';

const showProfile = ref(false);
const toggleProfile = () => {
	showProfile.value = !showProfile.value;
};
</script>
