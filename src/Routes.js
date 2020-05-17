import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Products from './screens/AllProducts';
import About from './screens/About';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/products" exact component={Products} />
      <Route path="/aboutus" exact component={About} />
    </Switch>
  );
}