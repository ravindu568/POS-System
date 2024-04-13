import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom' ;
import './App.css'
import Home from './components/Home';
import Customer from './components/Customer';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './components/Order';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
 return(

  <Router>
    <div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand" >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Wattpad-logo-vector.svg/1200px-Wattpad-logo-vector.svg.png" alt="logo" className="logo" />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        <Link className="nav-link" to='/customer'>Customer</Link>
        <Link className="nav-link" to='/product'>Products</Link>
        <Link className="nav-link" to='/order'>Order Management</Link>
        <Link className="nav-link" to='/login'>Log in</Link>
      </div>
    </div>
  </div>
</nav>


   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/customer' element={<Customer/>} />
    <Route path='/product' element={<Product/>} />
    <Route path='/order' element={<Order/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
  </Routes>
    </div>




  </Router>

 )
}

export default App
