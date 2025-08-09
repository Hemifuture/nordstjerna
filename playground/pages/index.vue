<template>
  <div class="container">
    <h1>Nordstjerna Playground</h1>
    <p>正在加载 Web Components...</p>
    
    <div class="card buttons-section">
      <h2>Buttons</h2>
      <div class="button-group">
        <n-button>你好</n-button>
        <n-button>No Level</n-button>
        <n-button level="low">Low Level</n-button>
        <n-button level="medium">Medium Level</n-button>
        <n-button level="high">High Level</n-button>
        <n-button status="success" level="low">Success</n-button>
        <n-button status="warning" level="medium">Warning</n-button>
        <n-button status="danger" level="high">Danger</n-button>
        <n-button disabled>Disabled</n-button>
        <n-button loading>Loading</n-button>
      </div>
    </div>
    
    <div class="card inputs-section">
      <h2>Inputs</h2>
      <div class="input-group">
        <n-input placeholder="Default input"></n-input>
        <n-input status="success" level="low" placeholder="Success input"></n-input>
        <n-input status="warning" level="medium" placeholder="Warning input"></n-input>
        <n-input status="danger" level="high" placeholder="Danger input"></n-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 在客户端加载时导入 Web Components
onMounted(async () => {
  if (process.client) {
    try {
      await import('@nordstjerna/ui')
      console.log('Nordstjerna UI components loaded successfully')
    } catch (error) {
      console.error('Failed to load Nordstjerna UI components:', error)
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

h1, h2 {
  color: #333;
  margin-top: 0;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1rem;
}
</style>
