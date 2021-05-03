import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
