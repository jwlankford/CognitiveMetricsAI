<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="min-h-screen rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
<div class="max-w-4xl w-full bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-200">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
        </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import ComponentCard from "@/components/common/ComponentCard.vue";
import BasicTableOne from "@/components/tables/basic-tables/BasicTableOne.vue";
const currentPageTitle = ref("Basic Tables");
</script>
