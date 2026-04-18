import type { Product } from '~/stores/products'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const store = useProductsStore()

  const { data } = await useAsyncData('products', () =>
    $fetch<Product[]>('/products', {
      baseURL: config.public.apiBase as string
    })
  )

  if (data.value) {
    store.apply(data.value)
  }
})
