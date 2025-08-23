<template>
	<div class="flex h-screen">
	<SideBar />
		<div class="flex-1 flex flex-col">
			<TopNav />
			<main class="flex-1 overflow-y-auto p-6 bg-gray-50">
				<slot />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import SideBar from './Sidebar.vue';
import TopNav from './TopNav.vue';
</script>
