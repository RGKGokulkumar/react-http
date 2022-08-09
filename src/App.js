import './App.css';
// import 'antd/dist/antd.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing/>} ></Route>
          <Route path='/product/:productId' exact element={<ProductDetail/>}></Route>
          <Route>Not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
