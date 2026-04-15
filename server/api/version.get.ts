export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*'
  })

  const config = useRuntimeConfig()
  return {
    name: 'FreshDonate Shop',
    version: '1.0.0',
    commit: config.buildCommit || 'unknown'
  }
})
