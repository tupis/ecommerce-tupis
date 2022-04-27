import './App.css';
import NavBar from './components/layout/NavBar';
import { Routes, Route} from 'react-router-dom';
import Contact from './components/layout/pages/Contact';
import About from './components/layout/pages/About';
import Product from './components/product/Product';
import data from './data';

function App() {

  const product = data;

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Product produto={product.name} descricao={product.description} price={product.price}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;