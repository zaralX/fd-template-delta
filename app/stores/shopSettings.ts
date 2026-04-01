interface ShopSettingsData {
  name: string
  description: string
  color: string
}

export const useShopSettingsStore = defineStore('shopSettings', () => {
  const name = ref('FreshDonate Shop')
  const description = ref('')
  const color = ref('sky')

  function apply(data: ShopSettingsData) {
    name.value = data.name
    description.value = data.description
    color.value = data.color
  }

  return { name, description, color, apply }
})
