export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    name: 'FreshDonate Shop',
    version: '1.0.0',
    commit: config.buildCommit || 'unknown'
  }
})
