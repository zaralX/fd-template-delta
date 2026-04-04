import type { PaymentOptionData } from '~/stores/paymentOptions'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const store = usePaymentOptionsStore()

  const { data } = await useAsyncData('payment-options', () =>
    $fetch<PaymentOptionData[]>('/payment-options', {
      baseURL: config.public.apiBase as string
    })
  )

  if (data.value) {
    store.apply(data.value)
  }
})
