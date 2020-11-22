import logo from './logo.svg';
import './App.css';
import Shop from './components/Shops/Shop';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
          <Shop></Shop>
     
          </div>
          <div className="col-md-4">
          <Cart></Cart> 
          </div>

        </div>
      </div>
    
    </section>
  );
}

export default App;
