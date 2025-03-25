import { NButton } from '@nordstjerna/ui';

function App() {
  return (
    <>
      <div class='card'>
        <NButton className='button'>你好</NButton>
        <NButton className='button'>No Level</NButton>
        <NButton className='button level-low'>Low Level</NButton>
        <NButton className='button level-medium'>Medium Level</NButton>
        <NButton className='button level-high'>High Level</NButton>
        <NButton className='button success level-low'>Success</NButton>
        <NButton className='button warning level-high'>Warning</NButton>
      </div>
    </>
  );
}

export default App;
