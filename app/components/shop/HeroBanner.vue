<script setup lang="ts">
defineProps<{
  title: string
  serverIp?: string
}>()

const copied = ref(false)

function copyIp(ip: string) {
  navigator.clipboard.writeText(ip)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <section class="relative overflow-hidden rounded-4xl bg-elevated min-h-105 lg:min-h-[520px]">
    <div class="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-transparent" />
    <div class="absolute -right-32 -top-24 size-130 rounded-full bg-primary/20 blur-[120px]" />
    <div class="absolute -right-10 bottom-0 top-0 w-1/2 flex items-center justify-center opacity-90">
      <UIcon
        name="i-lucide-pickaxe"
        class="size-72 lg:size-96 text-primary/60 rotate-12"
      />
    </div>

    <div class="relative flex flex-col h-full px-8 lg:px-20 pt-14 pb-10 lg:pt-28 lg:pb-16 min-h-[inherit]">
      <h1 class="font-display font-semibold text-4xl lg:text-6xl leading-tight max-w-200 text-white">
        {{ title }}
      </h1>

      <div class="mt-auto pt-10">
        <button
          v-if="serverIp"
          type="button"
          class="inline-flex items-center gap-4 bg-elevated px-6 py-4 lg:px-8 lg:py-5 rounded-2xl hover:opacity-90 transition-opacity cursor-pointer z-10"
          @click="copyIp(serverIp!)"
        >
          <span class="font-medium">{{ serverIp }}</span>
          <UIcon
            :name="copied ? 'i-lucide-check' : 'i-lucide-copy'"
            class="size-4 text-muted"
          />
        </button>
      </div>
    </div>
  </section>
</template>
