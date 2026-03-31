<template>
  <div class="min-h-screen flex flex-col bg-default">
    <!-- Header -->
    <header class="border-b border-default bg-elevated">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-primary"
          >
            FreshDonate
          </NuxtLink>

          <nav class="flex items-center gap-4">
            <UButton
              to="/"
              variant="ghost"
              label="Магазин"
              icon="i-lucide-store"
            />
            <UButton
              to="/cart"
              variant="ghost"
              icon="i-lucide-shopping-cart"
            />
          </nav>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-default py-6 text-center text-sm text-muted">
      <p>Powered by FreshDonate</p>
    </footer>
  </div>
</template>
