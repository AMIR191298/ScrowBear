import {useEffect, useState} from 'react'
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled from 'styled-components'
import {db} from './Firebase'


function App() {
      const [ cartitems, setCartitems ] = useState([]);

      const getCartItems = ()=>{
        db.collection('cartitems').onSnapshot((snapshot)=>{
         
          const tempItems = snapshot.docs.map((doc)=>({
            id: doc.id,
            product: doc.data()

          }))
          setCartitems(tempItems)
        })
      }

      useEffect(()=>{
        getCartItems();
      },[])

  return (
    <Router>
    <div className="App">
      <Header />
    <Switch>

      
    <Route path="/cart">
        <Cart cartitems ={cartitems}/>
    </Route>

    <Route path="/">
        <Home />
    </Route>


    </Switch>
    </div>
    </Router>
  );
}

export default App;
