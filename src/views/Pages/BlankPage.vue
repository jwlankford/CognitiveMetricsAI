<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="min-h-screen rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div class="w-full">
        <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
          <div class="max-w-4xl w-full bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-200">
            <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-left mb-8 sm:mb-12">AI Text Rewriter</h1>
            <div class="space-y-6 sm:space-y-8">
              <div v-for="(q, idx) in questions" :key="q.id">
                <label :for="q.id" class="block text-sm font-medium text-gray-700 mb-2">{{ q.label }}</label>
                <div class="relative flex items-center">
                  <div class="w-3/4 relative">
                    <QuillEditor
                      :id="q.id"
                      class="rounded-md border-gray-300 bg-white p-3 pr-10 pb-12"
                      :placeholder="q.placeholder"
                      v-model:content="q.content"
                      contentType="text"
                      :toolbar="undefined"
                      @focus="q.focused = true"
                      @blur="q.focused = false"
                    >
                      <template #toolbar-container="{ toolbar }">
                        <div class="quill-toolbar quill-toolbar-bottom question-toolbar" v-show="q.focused">{{ toolbar }}</div>
                      </template>
                    </QuillEditor>
                  </div>
                  <div class="flex flex-col items-center">
                    <button
                      @click="rewriteText(idx)"
                      :disabled="q.loading || !q.content.trim()"
                      class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 shadow flex items-center justify-center disabled:bg-indigo-300 disabled:cursor-not-allowed mb-2"
                      style="height:32px;width:32px;"
                      :aria-label="q.loading ? 'Rewriting...' : 'Rewrite'"
                    >
                      <span v-if="q.loading">
                        <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                      <span v-else>
                        <AIIcon />
                      </span>
                    </button>
                    <button
                      class="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow flex items-center justify-center"
                      style="height:32px;width:32px;"
                      :aria-label="'Save ' + q.label"
                    >
                      <SaveIcon />
                    </button>
                  </div>
                </div>
                <div v-if="q.error" class="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md relative text-sm" role="alert">
                  <span class="block sm:inline">An error occurred: {{ q.error }}</span>
                </div>
              </div>
            </div>
            <div v-if="error" class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative text-sm" role="alert">
              <span class="block sm:inline">An error occurred: {{ error }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>


<script setup lang="ts">
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import { ref } from 'vue';
import AIIcon from '@/icons/AIIcon.vue';
import { QuillEditor } from '@vueup/vue-quill';
import SaveIcon from '@/icons/SaveIcon.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const currentPageTitle = ref('Blank Page');

const questions = ref([
  {
    id: 'q1',
    label: 'Question 1: What is the main objective of the project?',
    placeholder: 'Enter your first point here...',
    content: '',
    loading: false,
    focused: false,
    error: null as string | null,
  },
  {
    id: 'q2',
    label: 'Question 2: What are the key challenges you anticipate?',
    placeholder: 'Enter your second point here...',
    content: '',
    loading: false,
    focused: false,
    error: null as string | null,
  },
  {
    id: 'q3',
    label: 'Question 3: What is the desired outcome or success metric?',
    placeholder: 'Enter your third point here...',
    content: '',
    loading: false,
    focused: false,
    error: null as string | null,
  },
    {
    id: 'q4',
    label: 'Question 4: Give an question?',
    placeholder: 'Enter your third point here...',
    content: '',
    loading: false,
    focused: false,
    error: null as string | null,
  },
]);

const error = ref<string | null>(null);

const rewriteText = async (idx: number) => {
  const q = questions.value[idx];
  q.loading = true;
  q.error = null;
  const textToRewrite = q.content;
  const setFunction = (val: string) => (q.content = val);

  let attempts = 0;
  const maxAttempts = 5;
  const baseDelay = 1000;
  const prompt = `Rewrite the following text only. Do not provide suggestions or feedback.\n\n${textToRewrite}`;
  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
  };
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=AIzaSyAk-_NNpQ510g7tILIbJYRgjOVXIXrjyIQ`;
  while (attempts < maxAttempts) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        if (response.status === 429) {
          const delay = baseDelay * Math.pow(2, attempts) + Math.random() * 1000;
          console.warn(`Attempt ${attempts + 1}: Rate limited. Retrying in ${delay / 1000} seconds.`);
          await new Promise(res => setTimeout(res, delay));
          attempts++;
          continue;
        }
        throw new Error(`API error: ${response.statusText}`);
      }
      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setFunction(text);
      } else {
        q.error = 'Failed to get a response from the AI. Please try again.';
      }
      break;
    } catch (e: unknown) {
      q.error = `An unexpected error occurred: ${typeof e === 'object' && e && 'message' in e ? (e as Error).message : String(e)}`;
      console.error(e);
      break;
    } finally {
      q.loading = false;
    }
  }
};
</script>

<style scoped>
.question-toolbar {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  border-top: 1px solid #e5e7eb;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.25rem 0.5rem;
}
.question-toolbar[style*="display: block"],
.question-toolbar[style*="display: inline"],
.question-toolbar[style*="display: flex"] {
  display: block !important;
}
</style>
