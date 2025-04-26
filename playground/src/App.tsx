import { NButton } from "@nordstjerna/ui";

function App() {
  return (
    <>
      <div class="card level-low buttons">
        <h1>Buttons</h1>
        <div class="button-group">
          <NButton>你好</NButton>
          <NButton>No Level</NButton>
          <NButton level="low">Low Level</NButton>
          <NButton level="medium">Medium Level</NButton>
          <NButton level="high">High Level</NButton>
          <NButton status="success" level="low">
            Success
          </NButton>
          <NButton status="warning" level="medium">
            Warning
          </NButton>
          <NButton status="danger" level="high">
            Danger
          </NButton>
        </div>
      </div>
      <div class="card level-low inputs">
        <h1>Inputs</h1>
        <div class="input-group">
          <input class="input" />
          <input class="input success level-low" />
          <input class="input warning level-medium" />
          <input class="input danger level-high" />
        </div>
      </div>
    </>
  );
}

export default App;
