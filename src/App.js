import React from 'react'
import './App.css';
import Header from'./Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51Odw3jSBMlOHYrbAIOiZ2d53hc4HXyuF825X02gjfyQibcKrZNd1stEVBcgZIMlPwXxzvFPtOaMxKVw0PRXjnW4U00Jjn2v9Zk')

function App() {
  const [{}, dispatch] = useStateValue()
  
  React.useEffect(() => {
    auth.onAuthStateChanged(authUser => {
        if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path='/orders' element={[<Header /> ,<Orders />]} />
          <Route path="/login" element={[<Login/>]} />
          <Route path="/checkout" element={[<Header />,
          <Checkout />
          ]} />
          <Route path='/payment' element={[
            <Header />,
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          ]} />
          <Route path="/" element={[<Header />,<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
