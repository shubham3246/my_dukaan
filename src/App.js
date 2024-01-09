import './App.css';
import Drawer from './components/drawer/Drawer';
import MyBody from './components/myBody/MyBody';


function App() {
  return (
    <div className="App h-full w-full">
      <div className='flex h-full w-full'>
        <Drawer/>
        <MyBody/>
      </div>
    </div>
  );
}

export default App;
