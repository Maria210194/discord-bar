import './App.css';
import Background from './components/Background';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='flex'>
      <SideBar/>
      <Background />
    </div>
  );
}

export default App;
