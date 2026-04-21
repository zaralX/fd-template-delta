<script setup lang="ts">
import type { Product } from '~/stores/products'

const settings = useShopSettingsStore()
const productsStore = useProductsStore()

const selectedCategory = ref('all')
const selectedServer = ref('all')
const purchaseOpen = ref(false)
const purchaseProduct = ref<Product | null>(null)

const currencySymbols: Record<string, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€'
}

const typeLabels: Record<string, string> = {
  item: 'Предметы',
  privilege: 'Привилегии',
  currency: 'Валюта',
  other: 'Другое'
}

const categories = computed(() => {
  const types = new Set(productsStore.items.map(p => p.type))
  return [...types].map(type => ({
    id: type,
    label: typeLabels[type] || type
  }))
})

const servers = computed(() => [{ id: 'shop', label: settings.name || 'Магазин' }])

const filteredProducts = computed(() =>
  productsStore.items.filter(p =>
    selectedCategory.value === 'all' || p.type === selectedCategory.value
  )
)

function openPurchase(productId: string) {
  const product = productsStore.items.find(p => p.id === productId)
  if (!product) return
  purchaseProduct.value = product
  purchaseOpen.value = true
}
</script>

<template>
  <div class="mx-auto px-6 lg:px-20 py-10 space-y-12">
    <ShopHeroBanner
      :title="settings.description || settings.name"
      :server-ip="settings.ip"
    />

    <ShopFilterBar
      id="shop"
      v-model:server="selectedServer"
      v-model:category="selectedCategory"
      :servers="servers"
      :categories="categories"
    />

    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
    >
      <ShopProductCard
        v-for="product in filteredProducts"
        :id="product.id"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
        :currency="currencySymbols[product.currency] || product.currency"
        :image-url="product.imageUrl"
        @add-to-cart="openPurchase"
      />
    </div>

    <div
      v-else
      class="text-center py-16"
    >
      <UIcon
        name="i-lucide-package-x"
        class="size-16 text-muted mx-auto"
      />
      <p class="mt-4 text-muted">
        Товары не найдены
      </p>
    </div>

    <ShopPurchaseModal
      v-if="purchaseProduct"
      v-model:open="purchaseOpen"
      :product="purchaseProduct"
    />
  </div>
</template>
