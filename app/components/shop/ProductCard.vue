<script setup lang="ts">
const props = defineProps<{
  id: string
  name: string
  price: number
  quantity: number
  currency?: string
  imageUrl?: string
}>()

const emit = defineEmits<{
  addToCart: [id: string]
}>()
</script>

<template>
  <div class="group flex flex-col rounded-3xl bg-[var(--theme-card-bg)] overflow-hidden transition-transform hover:-translate-y-0.5">
    <button
      type="button"
      class="relative h-64 w-full cursor-pointer"
      @click="emit('addToCart', props.id)"
    >
      <NuxtImg
        v-if="props.imageUrl"
        :src="props.imageUrl"
        :alt="props.name"
        class="h-full w-full object-cover"
      />
      <div
        v-else
        class="h-full w-full flex items-center justify-center bg-elevated"
      >
        <UIcon
          name="i-lucide-package"
          class="size-16 text-muted"
        />
      </div>
    </button>

    <div class="flex flex-col gap-2 items-start p-6 flex-1">
      <p class="font-display font-medium text-base truncate w-full">
        {{ props.name }}
      </p>
      <div class="flex gap-3 items-end w-full mt-auto">
        <p class="font-display text-primary">
          {{ props.price.toLocaleString() }}{{ props.currency || '₽' }}
        </p>
        <p class="font-display text-sm text-muted">
          <span class="opacity-60">/</span> {{ props.quantity }} шт.
        </p>
        <button
          type="button"
          class="ml-auto grid place-items-center size-11 rounded-2xl bg-primary text-white hover:opacity-90 transition-opacity cursor-pointer"
          aria-label="Купить"
          @click="emit('addToCart', props.id)"
        >
          <UIcon
            name="i-lucide-shopping-bag"
            class="size-5"
          />
        </button>
      </div>
    </div>
  </div>
</template>
