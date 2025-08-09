export default defineNuxtPlugin(async () => {
  let nordstjernaProvider = null
  
  if (import.meta.client) {
    try {
      const nordstjernaUI = await import('@nordstjerna/ui')
      console.log('Nordstjerna UI components loaded successfully')
      nordstjernaProvider = nordstjernaUI
    } catch (error) {
      console.error('Failed to load Nordstjerna UI components:', error)
    }
  }
  
  return {
    provide: {
      nordstjerna: nordstjernaProvider
    }
  }
})