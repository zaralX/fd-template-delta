<script setup lang="ts">
interface FilterItem {
  id: string
  label: string
}

const props = defineProps<{
  servers?: FilterItem[]
  categories: FilterItem[]
}>()

const selectedServer = defineModel<string>('server', { default: 'all' })
const selectedCategory = defineModel<string>('category', { default: 'all' })

const serverOptions = computed(() => props.servers?.length ? props.servers : [{ id: 'all', label: 'Все сервера' }])
const categoryOptions = computed(() => [{ id: 'all', label: 'Все товары' }, ...props.categories])
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <ShopFilterCard
      v-model="selectedServer"
      icon="i-lucide-server"
      title="Сервера"
      :options="serverOptions"
    />
    <ShopFilterCard
      v-model="selectedCategory"
      icon="i-lucide-grid-2x2"
      title="Категории"
      :options="categoryOptions"
    />
  </div>
</template>
