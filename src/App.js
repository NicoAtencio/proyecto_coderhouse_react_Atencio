import './App.css';
import {MyNavbar} from './components/navbar/Navbar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <MyNavbar />  
      <ItemListContainer greeting = 'Bienvenidos a mi app'/>
    </div>
  );
}

export default App;
