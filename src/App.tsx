import './App.css';
import { Checkbox } from './components/Checkbox';

function App() {
  return (
    <main className='w-full flex justify-center'>
      <section className='w-3/12'>
        <h1 className='text-3xl'>Hello world!</h1>
        <Checkbox />
      </section>
    </main>
  );
}

export default App;
