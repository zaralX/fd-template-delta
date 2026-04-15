export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*'
  })

  return {
    name: 'FreshDonate Shop',
    version: '1.0.0'
  }
})
