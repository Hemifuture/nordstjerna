import { NButton } from '@nordstjerna/ui';

function App() {
  return (
    <>
      <div class='card level-low buttons'>
        <h1>Buttons</h1>
        <div class='button-group'>
          <NButton className='button'>你好</NButton>
          <NButton className='button'>No Level</NButton>
          <NButton className='button level-low'>Low Level</NButton>
          <NButton className='button level-medium'>Medium Level</NButton>
          <NButton className='button level-high'>High Level</NButton>
          <NButton className='button success level-low'>Success</NButton>
          <NButton className='button warning level-high'>Warning</NButton>
          <NButton className='button danger level-high'>Danger</NButton>
        </div>
      </div>
      <div class='card level-low inputs'>
        <h1>Inputs</h1>
        <div class='input-group'>
          <input class='input' />
          <input class='input success level-low' />
          <input class='input warning level-medium' />
          <input class='input danger level-high' />
        </div>
      </div>
    </>
  );
}

export default App;
