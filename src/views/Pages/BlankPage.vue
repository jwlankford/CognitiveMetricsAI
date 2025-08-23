<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div
      class="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12"
    >
      <div class="mx-auto w-full max-w-[630px] text-center">
      <header class="text-center">
        <h1 class="text-4xl font-extrabold text-white mb-2 leading-tight">Employee Review Writer</h1>
        <p class="text-neutral-400">Enter your text below to get a clearer, more professional version.</p>
      </header>

            <!-- Input Text Area -->
      <div class="space-y-2">
        <label for="input-text" class="block text-sm font-medium text-neutral-300">Original Text</label>
        <textarea
          id="input-text"
          class="w-full h-40 p-4 text-neutral-200 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors duration-200 resize-none"
          placeholder="Type or paste your text here..."
          v-model="inputText"
        ></textarea>

              <!-- Action Button -->
      <button
        @click="handleRewrite"
        :disabled="isLoading || inputText === ''"
        class="w-full py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform active:scale-95"
        :class="{
          'bg-neutral-700 text-neutral-400 cursor-not-allowed': isLoading,
          'bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/30': !isLoading
        }"
      >
        <span v-if="isLoading" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Rewriting...
        </span>
        <span v-else>Rewrite Text</span>
      </button>


            <!-- Output Text Area & Error Display -->
      <div v-if="error" class="text-red-400 text-sm text-center font-medium bg-red-950 p-3 rounded-lg border border-red-800">
        {{ error }}
      </div>

            <div v-if="rewrittenText" class="space-y-2">
        <label for="output-text" class="block text-sm font-medium text-neutral-300">Rewritten Text</label>
        <div
          id="output-text"
          class="w-full p-4 text-neutral-200 bg-neutral-800 border border-neutral-700 rounded-lg whitespace-pre-wrap overflow-y-auto max-h-64"
        >
          {{ rewrittenText }}
        </div>
      </div>

      </div>

      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";

const currentPageTitle = ref("Blank Page");
</script>

<style></style>
