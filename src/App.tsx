import './App.css';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

function App() {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <section className='w-3/12 flex justify-center'>
        <div className='ui-panel'>
          {/* Header */}
          <div className='ui-panel-header'>
            <Checkbox label='All Pages' />
          </div>

          <div className='ui-panel-divider' />

          {/* Content */}
          <div className='ui-panel-content'>
            <Checkbox label='Page 1' />
            <Checkbox label='Page 2' />
            <Checkbox label='Page 3' />
            <Checkbox label='Page 4' />
          </div>

          <div className='ui-panel-divider' />

          {/* Footer */}
          <div className='ui-panel-footer'>
            <Button>Done</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
