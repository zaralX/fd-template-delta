interface ShopSettingsData {
  name: string
  description: string
  ip: string
  color: string
  telegram?: string
  discord?: string
}

export const useShopSettingsStore = defineStore('shopSettings', () => {
  const name = ref('FreshDonate Shop')
  const description = ref('')
  const color = ref('violet')
  const ip = ref('play.example.com')
  const telegram = ref('')
  const discord = ref('')

  function apply(data: ShopSettingsData) {
    name.value = data.name
    description.value = data.description
    color.value = data.color
    ip.value = data.ip
    telegram.value = data.telegram ?? ''
    discord.value = data.discord ?? ''
  }

  return { name, description, ip, color, telegram, discord, apply }
})
