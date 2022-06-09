import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import { UserContext } from './context/UserContext';



function App() {
  const userCtx = useContext(UserContext);
  return (
    <>
      
      <Router>
        <Header />
        <Routes>

          {
            userCtx.user.isLogged ? (
              <>
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />

                <Route path="/*" element={<Navigate to="/menu" />} />
              </>


            ) : (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/*" element={<Navigate to="/home" />} />
              </>

            )
          }

        </Routes>
      </Router>
    </>
  );
}

export default App;
