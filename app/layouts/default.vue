<script setup lang="ts">
const route = useRoute()
const settings = useShopSettingsStore()

interface navLink {
  label: string
  to: string
  icon: string
}

const navLinks: navLink[] = []

function isActive(to: string) {
  if (to === '/') return route.path === '/' && !route.hash
  if (to.startsWith('/#')) return route.hash === to.slice(1)
  return route.path === to
}

function scrollToShop() {
  const el = document.getElementById('shop')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <header class="border-b border-default">
      <div class="w-full mx-auto px-6 lg:px-20">
        <div class="flex items-center justify-between gap-6 h-20">
          <NuxtLink
            to="/"
            class="flex items-center gap-3 shrink-0"
          >
            <div class="size-11 rounded-xl bg-primary flex items-center justify-center">
              <UIcon
                name="i-lucide-box"
                class="size-5 text-white"
              />
            </div>
            <span class="font-display text-xl font-semibold tracking-tight">{{ settings.name }}</span>
          </NuxtLink>

          <nav class="hidden lg:flex items-center gap-8">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex gap-3 items-center text-sm transition-opacity hover:opacity-70"
              :class="isActive(link.to) ? 'text-primary' : 'text-default'"
            >
              <UIcon
                :name="link.icon"
                class="size-4"
              />
              <span>{{ link.label }}</span>
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-3">
            <a
              v-if="settings.telegram"
              :href="settings.telegram"
              target="_blank"
              rel="noopener"
              class="size-11 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-[#0088cc] hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <UIcon
                name="i-simple-icons-telegram"
                class="size-5"
              />
            </a>
            <a
              v-if="settings.discord"
              :href="settings.discord"
              target="_blank"
              rel="noopener"
              class="size-11 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-[#5865f2] hover:text-white transition-colors"
              aria-label="Discord"
            >
              <UIcon
                name="i-simple-icons-discord"
                class="size-5"
              />
            </a>
            <button
              type="button"
              class="hidden lg:inline-flex items-center px-6 py-3 rounded-2xl bg-elevated text-sm hover:opacity-90 transition-opacity cursor-pointer"
              @click="scrollToShop"
            >
              Перейти к товарам
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer>
      <div class="mx-auto px-6 lg:px-20">
        <div class="flex flex-wrap items-center justify-between gap-6 py-10 border-t border-default">
          <div class="flex items-center gap-3">
            <div class="size-11 rounded-xl bg-primary flex items-center justify-center">
              <UIcon
                name="i-lucide-box"
                class="size-5 text-white"
              />
            </div>
            <div>
              <p class="font-display font-semibold">
                {{ settings.name }}
              </p>
              <p
                v-if="settings.description"
                class="text-sm text-muted"
              >
                {{ settings.description }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a
              v-if="settings.telegram"
              :href="settings.telegram"
              target="_blank"
              rel="noopener"
              class="size-11 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-[#0088cc] hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <UIcon
                name="i-simple-icons-telegram"
                class="size-5"
              />
            </a>
            <a
              v-if="settings.discord"
              :href="settings.discord"
              target="_blank"
              rel="noopener"
              class="size-11 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-[#5865f2] hover:text-white transition-colors"
              aria-label="Discord"
            >
              <UIcon
                name="i-simple-icons-discord"
                class="size-5"
              />
            </a>
          </div>
        </div>

        <div class="py-6 text-center text-sm text-muted">
          <p>&copy; {{ new Date().getFullYear() }} {{ settings.name }}. Все права защищены.</p>
          <p class="mt-1">
            Сайт создан с помощью
            <NuxtLink
              to="https://github.com/Fresh-Donate"
              target="_blank"
              class="text-primary hover:underline"
            >
              FreshDonate
            </NuxtLink>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
