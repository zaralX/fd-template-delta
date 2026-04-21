<script setup lang="ts">
interface Option {
  id: string
  label: string
}

defineProps<{
  title: string
  icon: string
  options: Option[]
}>()

const selected = defineModel<string>({ default: 'all' })
</script>

<template>
  <div class="rounded-3xl bg-[var(--theme-card-bg)] p-6 lg:p-8">
    <div class="flex items-center gap-3 mb-6">
      <UIcon
        :name="icon"
        class="size-5 text-default"
      />
      <span class="font-display text-sm font-medium">{{ title }}</span>
    </div>
    <div class="flex flex-wrap gap-3">
      <button
        v-for="opt in options"
        :key="opt.id"
        type="button"
        class="inline-flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl text-sm font-medium transition-colors cursor-pointer"
        :class="selected === opt.id
          ? 'bg-[var(--theme-pill-bg)] text-white'
          : 'text-muted hover:text-default'"
        @click="selected = opt.id"
      >
        <span
          class="grid place-items-center size-5 rounded-full border"
          :class="selected === opt.id ? 'border-white bg-white text-black' : 'border-white/30'"
        >
          <UIcon
            v-if="selected === opt.id"
            name="i-lucide-check"
            class="size-3.5"
          />
        </span>
        <span>{{ opt.label }}</span>
      </button>
    </div>
  </div>
</template>
