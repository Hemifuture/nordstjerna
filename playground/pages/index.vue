<template>
  <div class="container">
    <h1>Nordstjerna Playground</h1>
    <p>正在加载 Web Components...</p>

    <div class="demo-panel buttons-section">
      <h2>Buttons (5 主题 + Level)</h2>
      <div class="button-group">
  <n-button theme="primary" level="low">Primary / Low</n-button>
  <n-button theme="primary" level="medium">Primary / Medium</n-button>
  <n-button theme="primary" level="high">Primary / High</n-button>
  <n-button theme="lilac" level="low">Lilac</n-button>
  <n-button theme="success" level="medium">Success</n-button>
  <n-button theme="warning" level="high">Warning</n-button>
  <n-button theme="danger" level="high">Danger</n-button>
  <n-button loading theme="lilac">Loading</n-button>
  <n-button disabled theme="primary">Disabled</n-button>
      </div>
    </div>

    <div class="demo-panel inputs-section">
      <h2>Inputs (5 主题)</h2>
      <div class="input-group">
  <n-input theme="primary" level="low" placeholder="Primary input" />
  <n-input theme="lilac" level="medium" placeholder="Lilac input" />
  <n-input theme="success" level="low" placeholder="Success input" />
  <n-input theme="warning" level="medium" placeholder="Warning input" />
  <n-input theme="danger" level="high" placeholder="Danger input" />
      </div>
    </div>
      <div class="demo-panel menu-section">
        <h2>Menu 演示</h2>
        <n-menu
          :items="menuItems"
          :value="menuValue"
          @select="onMenuSelect"
        />
        <div style="margin-top:12px;">当前选中：{{ menuValue }}</div>
          <h2 style="margin-top:2rem;">Menu 横向演示</h2>
          <n-menu
            :items="menuItems"
            :value="menuValue"
            direction="horizontal"
            @select="onMenuSelect"
          />
          <div style="margin-top:12px;">当前选中：{{ menuValue }}</div>
          <h2 style="margin-top:2rem;">Menu 主题演示</h2>
          <div style="display:flex;gap:2rem;flex-wrap:wrap;">
            <n-menu :items="menuItems" :value="menuValue" theme="primary" @select="onMenuSelect" />
            <n-menu :items="menuItems" :value="menuValue" theme="lilac" @select="onMenuSelect" />
            <n-menu :items="menuItems" :value="menuValue" theme="success" @select="onMenuSelect" />
            <n-menu :items="menuItems" :value="menuValue" theme="warning" @select="onMenuSelect" />
            <n-menu :items="menuItems" :value="menuValue" theme="danger" @select="onMenuSelect" />
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
onMounted(async () => {
  if (import.meta.client) {
    try {
      await import('@nordstjerna/ui')
      console.log('Nordstjerna UI components loaded successfully')
    } catch (error) {
      console.error('Failed to load Nordstjerna UI components:', error)
    }
  }
})

import { ref } from 'vue';
const menuItems = [
  { label: '首页', value: 'home' },
  { label: '文档', value: 'docs' },
  { label: '组件', value: 'components' },
  { label: '关于', value: 'about' }
];
const menuValue = ref('home');
function onMenuSelect(e: CustomEvent) {
  menuValue.value = e.detail.value;
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* demo panel wrapper (避免覆盖真实玻璃 .card 样式) */
.demo-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 1.75rem 2rem 2.25rem;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(12px) saturate(150%);
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
