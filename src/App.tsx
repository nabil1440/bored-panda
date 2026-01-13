import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

const PAGE_LABELS = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

function App() {
  // One list state
  const [pages, setPages] = useState<boolean[]>(PAGE_LABELS.map(() => false));

  // Derived state
  const allChecked = pages.every(Boolean);

  // Helpers
  const toggleAll = () => {
    setPages(pages.map(() => !allChecked));
  };

  const togglePage = (index: number) => {
    setPages(prev =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <section className='w-3/12 flex justify-center'>
        <div className='ui-panel'>
          {/* Header */}
          <div className='ui-panel-header'>
            <Checkbox
              label='All Pages'
              checked={allChecked}
              onChange={toggleAll}
            />
          </div>

          <div className='ui-panel-divider' />

          {/* Content */}
          <div className='ui-panel-content'>
            {PAGE_LABELS.map((label, index) => (
              <Checkbox
                key={label}
                label={label}
                checked={pages[index]}
                onChange={() => togglePage(index)}
              />
            ))}
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
