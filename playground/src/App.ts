// 导入 Web Components
import "@nordstjerna/ui";

function createApp() {
  const app = document.createElement('div');
  app.innerHTML = `
    <div class="card level-low buttons">
      <h1>Buttons</h1>
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
    <div class="card level-low inputs">
      <h1>Inputs</h1>
      <div class="input-group">
        <input class="input" placeholder="Default input" />
        <input class="input success level-low" placeholder="Success input" />
        <input class="input warning level-medium" placeholder="Warning input" />
        <input class="input danger level-high" placeholder="Danger input" />
      </div>
    </div>
  `;
  
  return app;
}

export default createApp;
