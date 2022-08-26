
import './App.css';
import Header from './Component/Header/header';
import Shop from './Component/Shop/Shop';
import { Routes, Route} from "react-router-dom";
import Order from './Component/Order/Order';
import Inventory from './Component/Inventory/Inventory';
import SignIn from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/home" element={<Shop/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/inventory" element={<Inventory/>} />
      <Route path="/Signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<Shop/>} />

      </Routes>
    </div>
  );
}

export default App;
